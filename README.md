# VSCode Enum Hover To Value

Shows Python `Enum` values when hovering over enum members (similar to JetBrains IDEs).

## Prerequisites

- Node.js **20+** (required by `@vscode/vsce`)
- npm (comes with Node)
- VS Code **1.75.0+**

Optional but recommended:
- `git` for cloning the repository

## Getting the source

```bash
git clone https://github.com/FahidLatheef/vscode-enum-hover-to-value.git
cd vscode-enum-hover-to-value
```

If you downloaded a zip instead, just extract it and open the folder in VS Code.

## Install dependencies

From the project root:

```bash
npm install
```

This installs TypeScript, VS Code typings, and the VS Code packaging tool `@vscode/vsce`.

## Build / compile

To compile the TypeScript extension to JavaScript:

```bash
npm run compile
```

The compiled files are written to the `out/` directory, as configured in `tsconfig.json`.

## Run the extension in VS Code

1. Open this folder in VS Code.
2. Press `F5` or run **Run and Debug → Launch Extension**.
3. A new **Extension Development Host** window will open.
4. Open a Python file that uses enums, e.g.
   ```python
   from enum import Enum

   class Color(Enum):
       RED = "red"
       GREEN = "green"
       BLUE = "blue"

   x = Color.RED
   ```
5. Hover over `Color.RED`. The extension will show the enum value in a hover popup.

## Package the extension (.vsix)

To create an installable `.vsix` package using `@vscode/vsce`:

```bash
npm run compile
npx @vscode/vsce package
```

This will:
- Run the `vscode:prepublish` script (which compiles the extension).
- Produce a file like `vscode-enum-hover-to-value-0.0.1.vsix` in the project root.

## Installing the .vsix in VS Code

Once you have the `.vsix` file:

1. In VS Code, open the **Extensions** view.
2. Click the `...` (More Actions) menu.
3. Choose **Install from VSIX...**.
4. Select the generated `.vsix` file.
5. Reload VS Code if prompted.

## Notes

- The `publisher`, `name`, and `version` fields in `package.json` must match your publisher ID if you plan to publish on the VS Code Marketplace.
- If you fork this project under your own GitHub account, update the `repository.url` field in `package.json` accordingly.
