#!/bin/bash
# Upload test coverage to Codecov
# We need to use a Bash script instead of using a npm script or the official
# GitHub action because we want to send OS and Node.js version as flags.
# Codecov does not support dots nor dashes in flags. However, GitHub actions
# variables for those do, so we need to strip them.

os="$1"
os="${os/-latest/}"

node="$2"
node="node_${node//./_}"

# We don't use the -Z flag (which makes CI build fail on upload error) and we
# use the --fail flag (which does not make CI build fail on curl error) because
# Codecov API fails too often.
curl --fail -s https://codecov.io/bash | \
  bash -s -- -f coverage/coverage-final.json -F "$os" -F "$node"
