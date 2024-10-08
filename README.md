# Test

Contributors:      The WordPress Contributors
Tags:              block
Tested up to:      6.6
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Example block scaffolded with Create Block tool.

## Description

```sh
npm run playground:mount -- --blueprint=./test/e2e/blueprint.json & \
sleep 10 && \
echo 'Playground is ready now, lets run some end-to-end tests.' && \
# DEBUG=pw:webserver \
#xvfb-run --auto-servernum --server-args="-screen 0 1280x960x24" -- \
npm run test:e2e:ui
```



### documenting the rabbit-hole

1. https://github.com/carstingaxion/test-playwright-e2e-utils/actions/runs/11226673910/job/31207606190 is the first workflow run, that allowed me to do basic [`publishPost`](https://github.com/WordPress/gutenberg/blob/2b7f43a20b71dd6ac9615fe6a294941f13055bb6/packages/e2e-test-utils-playwright/src/editor/publish-post.ts#L12C23-L12C34)
2. Running this locally in `:ui` mode fails, while the normal, headless mode fails only in webkit
    Lets run again, using:

    ```sh
    npm run playground:mount -- --blueprint=./test/e2e/blueprint.json & \
    sleep 10 && \
    echo 'Playground is ready now, lets run some end-to-end tests.' && \
    xvfb-run --auto-servernum --server-args="-screen 0 1280x960x24" -- \
    npm run test:e2e
    ```
3. Running with `xvfb-run` in normal, headless mode passed in all three, also webkit !
4. Re-Enabled `WP_HTTP_BLOCK_EXTERNAL` by accident and now know for sure, it's unrelated to the timeouts.
5. Re-Enabled GatherPress from .org, which immediately brought back the timeout-issue. (*Not nice, but BINGO!*)

    ```sh
    TimeoutError: locator.fill: Timeout 10000ms exceeded.
    Call log:
      - waiting for frameLocator('iframe[name="editor-canvas"]').getByLabel('Add title')


      14 |      }) => {
      15 |              await admin.createNewPost();
    > 16 |              await page.frameLocator('iframe[name="editor-canvas"]').getByLabel('Add title').fill('Change title to allow saving');
         |                                                                                              ^
    ```
6. Try `await page.getByLabel('Add title')` without the `frameLocator` which passed. All passed! No the search for a reliable cause starts again.
7. Cloning the test to run for `gatherpress_event` posts.
8. 

