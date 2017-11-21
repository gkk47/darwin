'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as Constants from './Constants';
import HTMLDocumentContentProvider from './HTMLDocumentContentProvider';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'extension.darwin-search',
    () => {
      const contentProvider = new HTMLDocumentContentProvider();
      contentProvider.generateHTML();
      let registration = vscode.workspace.registerTextDocumentContentProvider(
        'DarwinPreview',
        contentProvider
      );

      return vscode.commands
        .executeCommand(
          'vscode.previewHtml',
          Constants.ExtensionConstants.PREVIEW_URI,
          vscode.ViewColumn.Two
        )
        .then(success => {});
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
