'use strict';
import * as vscode from 'vscode';

/**
 * HTMLDocumentContentProvider 
 */
export default class HTMLDocumentContentProvider
  implements vscode.TextDocumentContentProvider {
  private _onDidChange: vscode.EventEmitter<vscode.Uri>;
  private _textEditor: vscode.TextEditor;

  constructor() {
    this._onDidChange = new vscode.EventEmitter<vscode.Uri>();
    this._textEditor = vscode.window.activeTextEditor;
  }

  provideTextDocumentContent(uri: vscode.Uri): string {
    return this.generateHTML();
  }

  public generateHTML(): string {
    let html = `
    <style>
      html,
      body {
          background: #fff;
          color: #000;
          margin: 0;
          padding: 0;
      }
    </style>
    <body>
      <iframe width="100%" height="800" src="http://darwincoding.com/" frameborder="0" allowfullscreen></iframe>
    </body>`;
    return html;
  }

  get onDidChange(): vscode.Event<vscode.Uri> {
    return this._onDidChange.event;
  }
}
