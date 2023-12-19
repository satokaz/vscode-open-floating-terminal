// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-open-floating-terminal" is now active!');

	async function createNewTerminal() {
		// await vscode.commands.executeCommand('workbench.action.focusQuickOpen');
		// await vscode.commands.executeCommand('workbench.action.focusActiveEditorGroup');
		// await vscode.commands.executeCommand('workbench.action.createTerminalEditor');
		await vscode.commands.executeCommand('workbench.action.createTerminalEditorSide');
		await vscode.commands.executeCommand('workbench.action.moveEditorToNewWindow');
		await vscode.commands.executeCommand('workbench.action.terminal.focus');
	}

	let terminalCommandId = 'extension.createNewTerminal';
    context.subscriptions.push(vscode.commands.registerCommand(terminalCommandId, createNewTerminal));

    let terminalStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    terminalStatusBarItem.command = terminalCommandId;
    terminalStatusBarItem.text = `$(terminal)`;
    terminalStatusBarItem.tooltip = 'Create New Terminal';
    terminalStatusBarItem.show();
    context.subscriptions.push(terminalStatusBarItem);

}

// This method is called when your extension is deactivated
export function deactivate() {}
