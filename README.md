# Playwright Login Automation Framework (TypeScript)

A clean, modular, and beginner-friendly Playwright framework built for testing login pages. Designed with reusability and scalability in mind, this project includes:

- Page Object Model (POM) for clean separation between page structure and test logic  
- Reusable test data centralized in a single file  
- Configurable Playwright settings (headless/headed mode, screenshots, and reports)  
- Easy-to-understand folder structure: `pages/`, `tests/`, `data/`, `utils/`  
- Ready-to-use: anyone can clone the repo, run `npm install`, and start testing  

## Requirements

- Node.js (LTS version recommended)  
- Playwright  

## Install Dependencies

Open a terminal in the project folder and run:

`npm install`  
`npx playwright install`

This installs all required dependencies and Playwright browsers.  

## Running Tests

Run all tests:

`npx playwright test`

Run tests with browser UI visible:

`npx playwright test --headed`

Run a specific test file:

`npx playwright test tests/login.spec.ts`

Run in debug mode:

`npx playwright test --debug`

## Folder Structure

- `pages/` — Page Object Model classes (e.g., `LoginPage.ts`)  
- `tests/` — Test files (e.g., `login.spec.ts`)  
- `data/` — Test data (e.g., login credentials)  
- `utils/` — Utility/helper functions  
- `playwright.config.ts` — Playwright configuration  
- `package.json` — Project dependencies  
- `package-lock.json`  
- `.gitignore`  
- `README.md`  

## Notes

- Do not upload `node_modules/` or Playwright-generated folders (`playwright-report/`, `test-results/`, `videos/`, `screenshots/`) to GitHub.  
- Add `.gitkeep` files to any empty folders to ensure GitHub creates them.  
- The framework is designed for modularity and reusability, making it easy to extend with more tests or pages.
