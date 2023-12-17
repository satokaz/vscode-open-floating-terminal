# vscode-open-floating-terminal README

Visual Studio Codeの拡張機能で、ターミナル操作を自動化するためのものです。
新しいターミナルを作成し、それを新しいウィンドウに移動し、そのターミナルにフォーカスする機能を提供します。

まず、`vscode.commands.executeCommand('workbench.action.createTerminalEditor');` は、新しいターミナルエディタを作成します。これは、VS Codeの統合ターミナルを新しいエディタタブとして開く操作をプログラム的に行うものです。

次に、`vscode.commands.executeCommand('workbench.action.moveEditorToNewWindow');` は、現在アクティブなエディタを新しいウィンドウに移動します。このコマンドは、先ほど作成したターミナルエディタを新しいウィンドウに移動させるために使用されます。

最後に、`vscode.commands.executeCommand('workbench.action.terminal.focus');` は、ターミナルにフォーカスを移動します。これにより、ユーザーは新しいターミナルを開いた直後にすぐにコマンドを入力できます。

ステータスバー項目を作成し、その項目をクリックすると上記の登録したコマンドが実行されるように設定します。
このステータスバー項目は、アイコンとツールチップを持ち、常に表示されます。


