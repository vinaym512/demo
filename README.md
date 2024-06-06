### README.md

# Playwright API and Web Testing Demo

This demo is built using the Playwright framework for both web and API tests.

## Prerequisites

To run tests on a Chrome browser in headed mode, the latest Chrome browser should be installed on your computer. Other browsers can be run in headless mode after installing the dependencies.

## Steps to Make the Project Ready

1. Clone the Demo project from the repository.
2. Open it in VSCode (you can use other IDEs as well).
3. Open a terminal and navigate to the project directory.
4. Install the dependencies:
    ```bash
    npm install
    ```

## Steps to Run the Tests

1. **Run All Tests**:
    ```bash
    npx playwright test
    ```

2. **Run Individual Test by Test File Name**:
    ```bash
    npx playwright test getTemperatureApi.spec.ts
    ```

3. **Display HTML Report**:
    ```bash
    npx playwright show-report
    ```

## Note

- **Bonus/Optional: Scenario B** part of the UI test is not converted to the POM (Page Object Model) yet. This test fails due to expected screenshot comparison discrepancies. However, test will still run to completion, validating all other requirements 

## Learn More

For more information, visit the [Playwright documentation](https://playwright.dev/).

---

This `README.md` provides clear instructions for setting up and running the project, ensuring users can easily follow along to get started with the Playwright demo.