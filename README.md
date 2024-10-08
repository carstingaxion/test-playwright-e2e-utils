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
