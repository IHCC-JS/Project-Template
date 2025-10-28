# Project Template

[//]: # (TODO Change Demo to Something more fun)
[//]: # (TODO FIX Tailwind to DEMO)
[//]: # (TODO add favicon [code logo])
[//]: # (TODO finish README)

This repository is a template for a TypeScript + Vite project.
This template is not completely empty and works as a demo of what projects in this class will look like.
All projects in this class will be based on this template.

> If you see any issues with this template, please open an issue (or better yet, a pull request).

[//]: # (TODO take a screenshot of complete project)
![Project Template UI](Project-UI.png)
![Project Test Suite Gif](test-Suite.gif)


## Prerequisites

- Node.js and npm
- And IDE
- Git

## Running the Template

```bash
# install dependencies
npm install
# run the project
npm run dev
```

The app will open automatically at `http://localhost:5173`

## Building and Previewing 

Sometimes you wi

```bash
# Create an optimized production build:
npm run build
# Preview the production build:
npm run preview

```

## Testing with Playwright

### Prerequisites

You will need to install the Playwright test runner:

```bash
npx playwright install
```

[//]: # (TODO how to install playwright on Windows)

### Running Tests

- Run all tests
    ```bash
    npm test
    ```
- Run tests with interactive UI
    ```bash
    npm run test:ui
    ```
- Debug tests step-by-step
    ```bash
    npm run test:debug
    ```

Tests are located in the `tests/` directory and automatically run on preview server start.

## Project Structure

```
├── index.html # Main HTML file
├── src/
│ ├── main.js # Entry point
│ ├── style.css # Global styles
│ └── components/ # Reusable components
├── tests/
│ └── demo.spec.js # Playwright tests
├── vite.config.js # Vite configuration
├── tailwind.config.js # Tailwind configuration
├── postcss.config.js # PostCSS configuration
└── playwright.config.js # Playwright configuration
```

## Creating This Project from Scratch

### Step 1: Initialize npm project

\`\`\`bash
mkdir my-project
cd my-project
npm init -y
\`\`\`

### Step 2: Install dependencies

\`\`\`bash
npm install --save-dev vite tailwindcss @playwright/test
\`\`\`

### Step 4: Create configuration files

**vite.config.js:**
\`\`\`javascript
import { defineConfig } from "vite"

export default defineConfig({
server: {
port: 5173,
open: true,
},
build: {
outDir: "dist",
sourcemap: true,
},
})
\`\`\`

**tailwind.config.js:**
\`\`\`javascript
export default {
content: ["./index.html", "./src/**/*.js"],
theme: {
extend: {},
},
plugins: [],
}
\`\`\`

**postcss.config.js:**
\`\`\`javascript
export default {
plugins: {
tailwindcss: {},
autoprefixer: {},
},
}
\`\`\`

**playwright.config.js:**
\`\`\`javascript
import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
testDir: "./tests",
fullyParallel: true,
forbidOnly: !!process.env.CI,
retries: process.env.CI ? 2 : 0,
workers: process.env.CI ? 1 : undefined,
reporter: "html",
use: {
baseURL: "http://localhost:5173",
},
webServer: {
command: "npm run dev",
url: "http://localhost:5173",
reuseExistingServer: !process.env.CI,
},
projects: [
{
name: "chromium",
use: { ...devices["Desktop Chrome"] },
},
],
})
\`\`\`

### Step 5: Update package.json scripts

\`\`\`json
"scripts": {
"dev": "vite",
"build": "vite build",
"preview": "vite preview",
"test": "playwright test",
"test:ui": "playwright test --ui",
"test:debug": "playwright test --debug"
}
\`\`\`

### Step 6: Create index.html

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vite + Tailwind</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
</html>
\`\`\`

### Step 7: Create src/main.js

\`\`\`javascript
import "./style.css"

// Your JavaScript code here
\`\`\`

### Step 8: Create src/style.css

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

### Step 9: Create tests/demo.spec.js

\`\`\`javascript
import { test, expect } from "@playwright/test"

test("demo test", async ({ page }) => {
await page.goto("/")
// Your tests here
})
\`\`\`

### Step 10: Run the project

\`\`\`bash
npm run dev
\`\`\`

## Optional: Add TypeScript

If you want to use TypeScript:

\`\`\`bash
npm install --save-dev typescript
\`\`\`

Create a `tsconfig.json`:
\`\`\`json
{
"compilerOptions": {
"target": "ES2020",
"useDefineForClassFields": true,
"lib": ["ES2020", "DOM", "DOM.Iterable"],
"module": "ESNext",
"skipLibCheck": true,
"esModuleInterop": true,
"allowSyntheticDefaultImports": true
},
"include": ["src"],
"references": [{ "path": "./tsconfig.node.json" }]
}
\`\`\`

Then rename `.js` files to `.ts` as needed.

