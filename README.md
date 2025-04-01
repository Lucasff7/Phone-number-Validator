# Phone Number Validator

## Project Overview
This project is a simple **US phone number validator** built using JavaScript. It provides an interface where users can input a phone number and check if it matches the valid US phone number format. The application includes validation logic and UI interactions to display results accordingly.

## Validation Rules
The validator supports the following formats for valid US phone numbers:
- `1 555-555-5555`
- `1 (555) 555-5555`
- `5555555555`
- `555-555-5555`
- `(555)555-5555`
- `1(555)555-5555`
- `1 555 555 5555`
- `1 456 789 4444`

Invalid formats include:
- Numbers with incorrect parentheses placement
- Numbers with extra or missing digits
- Numbers containing invalid characters
- Numbers with incorrect country codes

## How It Works
1. User enters a phone number in the input field.
2. Clicking the **Check** button triggers validation.
3. If valid, the **Results** section displays: `Valid US number: <input>`.
4. If invalid, the **Results** section displays: `Invalid US number: <input>`.
5. Clicking the **Clear** button removes all displayed results.
6. If no input is provided, an alert appears: `Please provide a phone number`.

## How to Run
Simply open the `index.html` file in a web browser and enter a phone number to test the validation logic.


