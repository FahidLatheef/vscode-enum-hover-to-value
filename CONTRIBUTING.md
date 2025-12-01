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

## Build / compile

To compile the TypeScript extension to JavaScript:

```bash
npm run compile
```

The compiled files are written to the `out/` directory, as configured in `tsconfig.json`.

## Package the extension (.vsix)

To create an installable `.vsix` package using `@vscode/vsce`:

```bash
npm run compile
npx @vscode/vsce package
```

This will:
- Produce a file similar `vscode-enum-hover-to-value-0.0.1.vsix` in the project root.

## Installing the .vsix in VS Code

Once you have the `.vsix` file:

1. In VS Code, open the **Extensions** view.
2. Click the `...` (More Actions) menu.
3. Choose **Install from VSIX...**.
4. Select the generated `.vsix` file.
5. Reload VS Code if prompted.
