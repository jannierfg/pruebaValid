# Introduction

You are working on an application for your company. It is nearly completed, yet a few issues remain to be resolved.
The user signup page is missing. You will have to follow the instructions below in order to complete the project.


## Setup

1. `npm install` to get dependencies
2. Start app with `npm run start` and open `http://localhost:4200/`
3. Use `npm test` or `npm run test:watch` to see tests failing
4. Fix issues so that tests pass
5. Solve all of the issues mentioned here
6. Submit your code on the Devskiller.com platform to verify that the task is completed

## Task Description

The HTML and styling of the form are provided. Your job is to connect it to angular and add proper validation.

Use **Template-Driven Forms** approach when implementing the requirements.

### 1. Make sure all fields are there
- Form should have `username`, `email`, `password` and `password_match` fields

### 2. Add some of that Angular magic
- Make sure all fields are bound to angular controls. Please use `FormsModule`

### 3. Add validation to fields
- All fields should be required
- Email should be validated (use angular built-in email validation)
- Password should match pattern - minimum 8 letters, numbers, at least one uppercase
- Password match value should match password value
- If field is invalid it should be marked as such - use angular validation

### 4. Some user feedback
- If field is invalid, it should display error.
- Use error elements that are provided
- Make sure elements include the correct class, i.e. `.form-username-error`
- Don't hide elements with CSS if there is no error. Make sure they are not present in DOM.

### 5. Make form a component
- Make sure when form is submitted (not only with button) the component emits proper *save* event that the parent component can subscribe to
- Prevent the event from occuring if any of form fields are invalid

For more details please run task inside devskiller and review the tests that are failing.

## Good Luck!
