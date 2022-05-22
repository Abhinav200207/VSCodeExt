const vscode = require('vscode');
const fs = require('fs')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "ab-code-templates" is now active!');

	let helloWorldCommand = vscode.commands.registerCommand('ab-code-templates.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from Ab Code Templates!');
	});

	let createSnippethtml = vscode.commands.registerCommand('ab-code-templates.createSnippethtml', function () {

		const { v4: uuidv4 } = require('uuid');
		const editor = vscode.window.activeTextEditor.document.getText().split("/n").map((abin) => {
			return abin.toString();
		});

		const name = vscode.window.activeTextEditor.document.fileName.split("\\").slice(-1);

		const jsonab = {
			"prefix": `!${name}`,
			"body": editor,
			"description": "code by user"
		}


		fs.readFile(__dirname + '/snippets/snippets.code-snippets', (err, inputab) => {
			const data = JSON.parse(inputab);
			data[`${name}   ${uuidv4()}`] = jsonab;
			fs.writeFileSync(__dirname + '/snippets/snippets.code-snippets', JSON.stringify(data), err => {
				if (err) {
					console.error(err)
					return
				}
			})
		})
	})

	let createSnippetpython = vscode.commands.registerCommand('ab-code-templates.createSnippetpython', function () {

		const { v4: uuidv4 } = require('uuid');
		const editor = vscode.window.activeTextEditor.document.getText().split("/n").map((abin) => {
			return abin.toString();
		});

		const name = vscode.window.activeTextEditor.document.fileName.split("\\").slice(-1);

		const jsonab = {
			"prefix": `!${name}`,
			"body": editor,
			"description": "code by user"
		}


		fs.readFile(__dirname + '/snippets/pythonab.code-snippets', (err, inputab) => {
			const data = JSON.parse(inputab);
			data[`${name}   ${uuidv4()}`] = jsonab;
			fs.writeFileSync(__dirname + '/snippets/pythonab.code-snippets', JSON.stringify(data), err => {
				if (err) {
					console.error(err)
					return
				}
			})
		})
	})

	let createSnippetcpp = vscode.commands.registerCommand('ab-code-templates.createSnippetcpp', function () {

		const { v4: uuidv4 } = require('uuid');
		const editor = vscode.window.activeTextEditor.document.getText().split("/n").map((abin) => {
			return abin.toString();
		});

		const name = vscode.window.activeTextEditor.document.fileName.split("\\").slice(-1);

		const jsonab = {
			"prefix": `!${name}`,
			"body": editor,
			"description": "code by user"
		}


		fs.readFile(__dirname + '/snippets/cppab.code-snippets', (err, inputab) => {
			const data = JSON.parse(inputab);
			data[`${name}   ${uuidv4()}`] = jsonab;
			fs.writeFileSync(__dirname + '/snippets/cppab.code-snippets', JSON.stringify(data), err => {
				if (err) {
					console.error(err)
					return
				}
			})
		})
	})

	let createSnippetjs = vscode.commands.registerCommand('ab-code-templates.createSnippetjs', function () {

		const { v4: uuidv4 } = require('uuid');
		const editor = vscode.window.activeTextEditor.document.getText().split("/n").map((abin) => {
			return abin.toString();
		});

		const name = vscode.window.activeTextEditor.document.fileName.split("\\").slice(-1);

		const jsonab = {
			"prefix": `!${name}`,
			"body": editor,
			"description": "code by user"
		}


		fs.readFile(__dirname + '/snippets/jsab.code-snippets', (err, inputab) => {
			const data = JSON.parse(inputab);
			data[`${name}   ${uuidv4()}`] = jsonab;
			fs.writeFileSync(__dirname + '/snippets/jsab.code-snippets', JSON.stringify(data), err => {
				if (err) {
					console.error(err)
					return
				}
			})
		})
	})



	context.subscriptions.push(helloWorldCommand, createSnippethtml, createSnippetpython, createSnippetcpp, createSnippetjs);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}



// #include<bist/stdc++.h>
// using namespace std;


// int main(){
//     cout << "Hello world!" << endl
// }