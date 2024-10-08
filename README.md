# Test

Contributors:      The WordPress Contributors
Tags:              block
Tested up to:      6.6
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Example block scaffolded with Create Block tool.

## Description

```
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

    ```
    npm run playground:mount -- --blueprint=./test/e2e/blueprint.json & \
    sleep 10 && \
    echo 'Playground is ready now, lets run some end-to-end tests.' && \
    xvfb-run --auto-servernum --server-args="-screen 0 1280x960x24" -- \
    npm run test:e2e
    ```
3. Running with `xvfb-run` in normal, headless mode passed in all three, also webkit !
4.
