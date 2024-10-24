# vscode-touch-bar-ext

Used this article(s) to get a start on this:
https://mybyways.com/blog/the-correct-way-to-create-a-vs-code-touch-bar-extension
https://www.eliostruyf.com/creating-submenu-code-step-step-guide/

## Adding Commands

Leaving notes to myself to discern what to do here:

- Modifying the package.json (or user config for extension) is mostly where the work is done
- The full command's ID is constructed by combining the `contributes.configuration.properties.[ext].commands.default`'s keys with the values in the array(s). Example:
  - Extension's config has a `workbench.action.debug` array with a `restart` key.
  - The full command that this runs is `workbench.action.debug.restart`
  - The extension registers the command `vscode-touch-bar-ext.restart`
  - `contributes.commands` is where the title/icon can be changed
  - The command should be present in `contributes.menus.touchBar` to show up in the touch bar and under certain conditions

## Using

- `npm install` to install the dependencies
- `npx vsce package` to create the .vsix file
- `code --install-extension vscode-touch-bar-ext-0.0.1.vsix` to install the extension
