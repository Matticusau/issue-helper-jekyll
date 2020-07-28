[![License](https://img.shields.io/github/license/Matticusau/issue-helper-jekyll.svg?style=flat-square)](LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/Matticusau/issue-helper-jekyll.svg?style=flat-square)](https://github.com/heinrichreimer/action-github-changelog-generator/commits)
[![Latest tag](https://img.shields.io/github/tag/Matticusau/issue-helper-jekyll.svg?style=flat-square)](https://github.com/heinrichreimer/action-github-changelog-generator/releases)
[![Issues](https://img.shields.io/github/issues/Matticusau/issue-helper-jekyll.svg?style=flat-square)](https://github.com/heinrichreimer/action-github-changelog-generator/issues)
[![Pull requests](https://img.shields.io/github/issues-pr/Matticusau/issue-helper-jekyll.svg?style=flat-square)](https://github.com/heinrichreimer/action-github-changelog-generator/pulls)

# issue-helper-jekyll

A GH Action to help managing Issues created on a repo that hosts a Jekyll style blog site.

Works in conjunction with [PR Helper](https://github.com/Matticusau/pr-helper).

Currently supports the following functionality:

- TBA

## Events

The Action can respond to the following [workflow events](https://help.github.com/en/actions/reference/events-that-trigger-workflows):

- TBA

## Inputs

Set the following inputs in the workflow file

### `repo-token`

**Required** The token to use for github authentication. Recommend using `${{ secrets.GITHUB_TOKEN }}`. If additional access is required use a PAT/Secret and set it as a secret. More info see [here](https://help.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token).

> If you have enabled Branch Protection rules then a PAT/Secret will need to be configured.

## Outputs

None

## Example usage

TBA

## Example inputs

TBA

## Troubleshooting

If you are having issues running the action enable the debug logs as some additional logging has been built into the Action.

1. To enable runner diagnostic logging, set the following secret in the repository that contains the workflow: `ACTIONS_RUNNER_DEBUG` to `true`.
1. To download runner diagnostic logs, download the log archive of the workflow run. The runner diagnostic logs are contained in the `runner-diagnostic-logs` folder. For more information on downloading logs, see [Downloading logs](https://help.github.com/en/actions/configuring-and-managing-workflows/managing-a-workflow-run#downloading-logs).

[Enable debug logging](https://help.github.com/en/actions/configuring-and-managing-workflows/managing-a-workflow-run#enabling-debug-logging)

## Known issues

None
