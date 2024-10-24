// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const cmd = vscode.commands,
		sub = context.subscriptions,
		cfg = vscode.workspace.getConfiguration('vscode-touch-bar-ext.commands');
	console.log('Activating vscode-touch-bar-ext');
	Object.keys(cfg).forEach((key) => {
		const val = cfg[key];
		if (Array.isArray(val)) {
			val.forEach((itm) => {
				console.log(
					'Registering command: ' + key + '.' + itm,
					`(${'vscode-touch-bar-ext.' + itm})`
				);
				sub.push(
					cmd.registerCommand('vscode-touch-bar-ext.' + itm, () => {
						cmd.executeCommand(key + '.' + itm);
					})
				);
			});
		}
	});
}

// This method is called when your extension is deactivated
export function deactivate() {}
