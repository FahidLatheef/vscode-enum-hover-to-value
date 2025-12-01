import * as vscode from "vscode";

/**
 * This hover provider detects patterns like `Color.RED`,
 * locates the enum definition, extracts the value, and
 * displays it in the hover popup.
 */
export function activate(context: vscode.ExtensionContext) {
    console.log("Python Enum Hover extension activated.");

    const hoverProvider = vscode.languages.registerHoverProvider("python", {
        async provideHover(document: vscode.TextDocument, position: vscode.Position) {

            const range = document.getWordRangeAtPosition(position, /[\w\.]+/);
            if (!range) return;

            const text = document.getText(range);  // e.g., "Color.RED"
            if (!text.includes(".")) return;

            const [className, member] = text.split(".");
            if (!className || !member) return;

            // Ask VS Code to resolve definition location for the enum
            const locations = await vscode.commands.executeCommand<vscode.Location[]>(
                "vscode.executeDefinitionProvider",
                document.uri,
                position
            );

            if (!locations || locations.length === 0) {
                return;
            }

            const definition = locations[0];
            const defDoc = await vscode.workspace.openTextDocument(definition.uri);
            const enumSource = defDoc.getText();

            // Regex to detect:   RED = "red"
            const pattern = new RegExp(`${member}\\s*=\\s*(.+)`);
            const match = enumSource.match(pattern);

            if (!match) return;

            let value = match[1].trim();
            if (value.endsWith(",")) {
                value = value.slice(0, -1);
            }

            const md = new vscode.MarkdownString(undefined, true);
            md.isTrusted = true;
            md.appendCodeblock(`${className}.${member} = ${value}`, "python");

            return new vscode.Hover(md);
        }
    });

    context.subscriptions.push(hoverProvider);
}

export function deactivate() {}
