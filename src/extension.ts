import * as vscode from 'vscode';
import { TemplatePanel } from './templatePanel';

export function activate(context: vscode.ExtensionContext) {
	
	context.subscriptions.push(vscode.commands.registerCommand('extension-template.showPanel', () => {
        TemplatePanel.show(context);
    }));
}

export function deactivate() {}
