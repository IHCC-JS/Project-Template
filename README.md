# Project Template

[//]: # (TODO Change Demo to Something more fun)

[//]: # (TODO add favicon [code logo])

[//]: # (TODO finish README)

This repository is a template for a Tailwind + TypeScript + Vite project.
This template is not completely empty and works as a demo of what projects in this class will look like.
All projects in this class will be based on this template.

> If you see any issues with this template, please open an issue (or better yet, a pull request).

[//]: # (TODO take a screenshot of complete project)
![Project Template UI](Project-UI.png)
![Project Test Suite Gif](test-Suite.gif)

## Prerequisites

- [Node.js](https://nodejs.org/en/download)
- Any IDE ([VSCode](https://code.visualstudio.com/download) or [WebStorm](https://www.jetbrains.com/webstorm/download)
  are recommended)
- [Git](https://git-scm.com/install)

## Running the Template

```bash
# install dependencies
npm install
# run the project
npm run dev
```

The app will open automatically at `http://localhost:5173`

## Building and Previewing

Sometimes you might want to preview your project before submitting it.

```bash
# Create an optimized production build:
npm run build
# Preview the production build:
npm run preview
```

## Testing with Playwright

Projects in this class will use Playwright for testing.
These tests will be given to you with each project.
Your grade will be based on whether the tests pass.
Make sure you run the tests before submitting your project.
Read more about Playwright [here](https://playwright.dev/).

[//]: # (TODO how to install playwright on Windows)

To run the tests locally, you can use the following commands:

```bash
# you will need to install playwright once
npx playwright install
# how to run tests
npm test
# run tests with interactive UI
npm run test:ui
# run tests with debug
npm run test:debug
```

Tests are located in the `tests/` directory if you run into any issues.
If the tests are not passing when you think they should be, please open an issue (or better yet, a pull request).

