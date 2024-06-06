### README.md

# Playwright API and Web Testing Demo

This demo is built using the Playwright framework for both web and API tests.

### Steps to Set Up the Project on a Computer

1. **Clone the Repository**:
   - Open your terminal.
   - Clone the demo project from the repository:
     ```bash
     git clone https://github.com/<username>/<repository>.git
     ```
   - Navigate to the project directory:
     ```bash
     cd <repository>
     ```

2. **Open the Project in an IDE**:
   - Open the project in VSCode or your preferred IDE.

3. **Install Node.js**:
   - If Node.js is not already installed on your computer, download and install it from the [official Node.js website](https://nodejs.org/).

4. **Install Project Dependencies**:
   - Open a terminal in your IDE or use the terminal in your operating system.
   - Navigate to the project directory if not already there.
   - Install the necessary project dependencies using npm:
     ```bash
     npm install
     ```

5. **Install Playwright Browsers**:
   - Install the required browsers for Playwright:
     ```bash
     npx playwright install --with-deps
     ```

### Steps to Run the Tests

1. **Run All Tests**:
   - In the terminal, enter the following command to run all tests:
     ```bash
     npx playwright test
     ```

2. **Run Individual Tests**:
   - To run an individual test by its file name, use the following command:
     ```bash
     npx playwright test <testFileName>.spec.ts
     ```
   - Example:
     ```bash
     npx playwright test getTemperatureApi.spec.ts
     ```

3. **Display HTML Report**:
   - After running the tests, display the HTML report with:
     ```bash
     npx playwright show-report
     ```

### Notes

- **Optional: Scenario B** part of the UI test is not yet converted to the Page Object Model (POM). Also, this test fails due to expected screenshot comparison discrepancies. However, this test will still run to completion, validating all other requirements.
- **CircleCI pipeline** I have created a CI/CD pipeline workflow using CircleCI, and the configuration file is included in the repository. To provide access to the pipeline, you need to be invited as a collaborator.

### Learn More

For more information, visit the [Playwright documentation](https://playwright.dev/).
