# QA code exercise

Hello there!

If you're reading this, it means you're now at the coding exercise step of the engineering hiring process WOOT WOOT. We're really happy that you made it here and super appreciative of your time!

If you have any questions, don't hesitate to reach out directly to code_exercise@remote.com.

## Specs for the exercise

For this coding exercise, you will be working with an existing application that displays a searchable list of team members. The design specifications for the application can be found in the Figma file that was shared with you via email. The application should have the following functionality:

- A search field that allows users to search for team members by name.
- A filter field that allows users to filter team members by employment type (e.g. Employee, Contractor)
- A modal that allows users to create new team members and edit existing team members.

## Exercise

Create a new branch called `solution` and commit all the needed changes in there. In the end, open a PR.

### Exercise 1

Your task is to manually test the application to ensure that it meets the design specifications provided in the Figma file and that it functions as expected. This includes testing the search and filter functionality, as well as testing the create and edit functionality.

It is important to note that you should test the application thoroughly and provide detailed documentation of any bugs or issues that you encounter. Additionally, you should propose solutions for any issues that you find.

Please report issues on the repository's "Issues" feature with detailed information, including severity and priority in the report.

### Exercise 1.1

Please provide your answers to the following questions by adding them directly to the [Exercise 1.1 candidate answers section](#candidate_answers).

- What different types of testing can be used to ensure product quality to this test application and explain when and why each type should be employed?

- In your opinion, what areas of the product requirements would benefit from improvement and why?

<a name="candidate_answers"></a>

#### Exercise 1.1 candidate answers

1. **Unit Testing**:
    - **Purpose**: To test individual components (functions, methods) in isolation.
    - **When**: Employed during development to catch logic errors early.
    - **Why**: Ensures that each piece of code functions correctly on its own.

2. **Integration Testing**:
    - **Purpose**: To verify interactions between different parts of the application.
    - **When**: After unit testing and when components are integrated.
    - **Why**: Ensures that components work together seamlessly.

3. **Functional Testing**:
    - **Purpose**: Validates end-to-end functionality from a user's perspective.
    - **When**: During the later stages of development.
    - **Why**: Ensures that features (search, filter, create, edit) work as expected.

4. **Regression Testing**:
    - **Purpose**: Re-run tests after code changes to ensure existing functionality remains intact.
    - **When**: After bug fixes or feature enhancements.
    - **Why**: Prevents unintended side effects.

5. **Usability Testing**:
    - **Purpose**: Involves real users to assess usability.
    - **When**: Before release or during user acceptance testing.
    - **Why**: Identifies usability issues and gathers user feedback.

6. **Performance Testing**:
    - **Purpose**: Evaluates system performance under load.
    - **When**: Before deployment to production.
    - **Why**: Ensures responsiveness and scalability.

7. **Security Testing**:
    - **Purpose**: Checks for vulnerabilities and data protection.
    - **When**: Throughout development and before release.
    - **Why**: Protects against security breaches.

8. **Compatibility Testing**:
    - **Purpose**: Tests across different browsers, devices, and operating systems.
    - **When**: Before release.
    - **Why**: Ensures consistent behavior across platforms.

**Areas for Improvement**:

1. **Error Handling**:
    - **Why**: Clear and informative error messages are crucial. Improve error handling to guide users effectively when they encounter issues.

2. **UI/UX Consistency**:
    - **Why**: Evaluate the user interface for consistency, responsiveness, and overall user-friendliness. Ensure a seamless experience.

3. **Data Validation**:
    - **Why**: Enhance validation rules during data entry. Prevent invalid or incomplete data from being saved.

4. **Accessibility**:
    - **Why**: Consider accessibility guidelines (e.g., WCAG) to make the application usable by all users, including those with disabilities.

5. **Edge Cases**:
    - **Why**: Test extreme scenarios (e.g., very long names, special characters) thoroughly. Ensure robustness.

6. **Documentation**:
    - **Why**: Comprehensive documentation helps future maintainers and testers understand the application.

### Exercise 2

We would like you to write end-to-end (E2E) tests for the application using a JavaScript testing framework. Choose a JS platform/framework of your liking (as long as it is free or open source) and automate as many tests as you'd like.

The E2E tests should simulate user interactions and validate the application's UI updates and data processing.

It is important to note you should provide documentation on how to run the tests and any assumptions made during the development of the tests.

### Exercise 2.2

Create a simple report for the automation test that you created and add it to the repo. Please also provide documentation on how to generate the report.

## Prerequisites

- Node = 16
- NPM >= 5.6
- Git

## Getting started

1. Clone the project repository
2. Install the dependencies `npm install`

## About the project

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [JSON server](https://github.com/typicode/json-server) will give you a fake but realistic REST API using the static `src/server/db.json` file created after running `npm install`. If you make POST, PUT, PATCH or DELETE requests, changes will be automatically saved to `db.json`.

### Project stack

- React (Create React App)
- CSS with Styled-Components
- Tests with React Testing Library

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

[JSON server](https://github.com/typicode/json-server) will run concurrently in watch mode on port 4002 - [http://localhost:4002](http://localhost:4002).

### `npm run seed-db`

Resets `db.json` to the original initial data (`db.base.json`).\
This script runs automatically after `npm install`.

## Available endpoints

- `GET http://localhost:4002/people`: get the full list of people
- `GET http://localhost:4002/people?name_like={substring}`: search for people where the name includes `{substring}`
- `GET http://localhost:4002/people?employment={string}`: search for people where the employment type matches `string`
- `GET http://localhost:4002/people?name_like={substring}&employment={string}`: search for people by name and employment type
- `GET http://localhost:4002/people/{id}`: get the person with id `{id}`
- `POST http://localhost:4002/people`: create a new person
- `PATCH http://localhost:4002/people/{id}`: update the person with id `{id}`
