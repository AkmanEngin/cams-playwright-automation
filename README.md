# CAMS Automation Framework

* You can open this file as preview by right clicking 'README.md' and choosing 'Open Preview' option 

This project is designed to automate the CAMS using Playwright, TypeScript and Cucumber. Follow the steps below to set up the environment, work on the project, and manage it using Git.

## Table of Contents
1. [Prerequisites](#Prerequisites)
2. [Environment Setup](#environment-setup)
3. [Framework Structure and Usage](#framework-structure-and-usage)
4. [Project and Git Workflow](#project-and-git-workflow)<br>

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (v18 or higher)
- npm (v6 or higher), which comes with Node.js
- Visual Studio Code
- Git
- Playwright Test
- cucumber (v10 or higher)
- dotenv (v16 or higher)
- ts-node (v10 or higher)
- types node (v20 or higher)
- typescript (v5 or higher)

To install Playwright Test, cucumber, dotenv, typescript, ts-node, types-node, and types-cucumber open your terminal and run:
```sh
npm install @playwright/test @cucumber/cucumber dotenv typescript ts-node @types/node
```
```sh
npx playwright install  
```
<br>

## Environment Setup

### 1. Install VS Code Extensions
Install the following extensions for a better development experience:
- Better Comments
- Cucumber (Gherkin) Full Support
- Cucumber for VS Code
- Material Icon Theme
- npm Intellisense
- NPM Run
- Playwright Snippets

### 2. Install Project Dependencies
Open the VS Code terminal and run the following commands:
```sh
npm install @playwright/test @cucumber/cucumber dotenv typescript ts-node @types/node
```

### 3. Run the "test:tag" Script
Go to the package.json file and run the "test:tag" script to verify the setup.<br>
You can also run the tests via terminal: <br>

```sh
npx cucumber-js
```

## Framework Structure and Usage

### 1. The `features` folder
This folder is used for storing the feature files, each feature file has a unique tag name which can be used to run specific feature in `package.json` file

### 2. The `hooks` Folder
This folder contains the globalHooks for cucumber step definitions.<br> It also has the playwright utility for page & browser. Browser selection and headless-headed run options are set in globalHooks. You can change the browser in this class.

### 3. The `pages` Folder
This folder is used for storing webelements of the pages.<br>
BasePage is the parent class of all the page classes. All other page classes extend and inherit BasePage.<br>
Every single page class must be added and initialized in the `globalPagesSetup.js` to be able to locate elements of each pages by using same page fixture of playwright.

### 4. The `steps` Folder
This folder is used for storing the step definitions of the features.<br>
The file names of the steps should match with its feature file's name.<br>
To create step definitions, add feature file or Scenario tags for work in progress into test-tag command and run. The step definition empty method bodies will be generated on the console. You can copy and paste into your stepDefinition class and code.

### 5. The `.env` file
A file to store and load the environment variables, urls, credentials etc. that are needed for this automation project.<br>

### 6. `cucumber.js` File
A CommonJS configuration file for CucumberJS, managing settings for BDD-style automated tests. It includes paths for step definitions, support files, plugins, and output formatting options, allowing customization of test execution.

### 7. `package.json` File
The `package.json` file for the "cams-automation" project includes several key sections:

- **`name`**: Identifies the project as "cams-automation".
- **`version`**: Marks the current version at "1.0.0".
- **`main`**: Points to the main entry file of the project, "index.js".
- **`scripts`**: Defines custom scripts for the project:
    - **`test`**: Runs CucumberJS tests.
    - **`test:tag`**: Executes CucumberJS tests filtered by the `@tagName` tag.
    - **`Mac-open:report`**: Opens the cucumber report HTML file on macOS.
    - **`Windows-open:report`**: Opens the cucumber report HTML file on Windows.
- **`dependencies`**: Lists project dependencies, including Cucumber, Playwright for testing, and dotenv for environment variable management.
This setup facilitates BDD-style testing with CucumberJS and Playwright, and includes cross-platform support for viewing test reports.<br>


## Project and Git Workflow

### 1. Create Feature Branches
Create separate branches for each feature from the develop branch. Use the naming convention team uses for feature branches.
Note: You must create a unique feature branch for every feature file before you work on them.
### 2. Update the Project
Update your local repository. Pull the current code.
### 3. Checkout the Specific Feature Branch
Checkout the specific feature branch you need to work on:
```sh
git checkout feature/branch_name
```
Double-check the checked-out branch. 
### 4. Work on the Feature File
Work on the feature file of the branch you checked out.
### 5. Commit and Push Changes
After fully completing and testing the feature file, commit and push your changes with descriptive commit messages.
### 6. Create a Pull Request
Create a pull request from your remote feature branch to the develop branch. After code review it can be merged to develop branch.
<br>
