1. **Design Inconsistencies:**
    - **People List (Loading)**:
        - **Actual**: The table records counter is displayed.
        - **Expected**: The table records counter should not be displayed.
        - **Severity**: Minor
        - **Priority**: Medium

    - **People List (Search)**:
        - **Actual**: The Contractor or Employee filter is not applied when only one record is retrieved.
        - **Expected**: The filter should be applied regardless of the number of retrieved records.
        - **Severity**: Major
        - **Priority**: High

    - **Edit Modal**:
        - **Actual**: The Close button lacks Focus and Loading states.
        - **Expected**: The Close button should have both Focus and Loading states.
        - **Severity**: Minor
        - **Priority**: Low

    - **Edit Button**:
        - **Actual**: The Edit button does not have a Focus state.
        - **Expected**: The Edit button should have a Focus state.
        - **Severity**: Minor
        - **Priority**: Low

    - **Add Member Modal**:
        - **Actual**: Field validation does not display a red line when there is no input.
        - **Expected**: A red line should appear to indicate validation errors.
        - **Severity**: Major
        - **Priority**: Medium

    - **Toast Messages**:
        - **Actual**: Toast messages lack a Hover state.
        - **Expected**: Toast messages should have a Hover state.
        - **Severity**: Minor
        - **Priority**: Low

    - **Edit Mode Background Color**:
        - **Actual**: The background color in Edit mode does not match the design.
        - **Expected**: The background color should align with the design.
        - **Severity**: Minor
        - **Priority**: Low

    - **Edit Mode Footer**:
        - **Actual**: The Save and Close buttons have incorrect colors.
        - **Expected**: The buttons' colors should match the design.
        - **Severity**: Major
        - **Priority**: Medium

    - **Add Member Modal**:
        - **Actual**: The labels "Currency of Salary" and "Type of Employment" are not capitalized.
        - **Expected**: The labels should be capitalized.
        - **Severity**: Minor
        - **Priority**: Low

    - **Add Mode Footer**:
        - **Actual**: The Save and Close buttons have colors that deviate from the design.
        - **Expected**: The buttons' colors should match the design.
        - **Severity**: Major
        - **Priority**: Medium

2. **Functional Issues:**
    - **Job Title Field**:
        - **Actual**: The job title field is not updated via Edit.
        - **Expected**: Editing should update the job title field.
        - **Severity**: Major
        - **Priority**: High

    - **Free Text Columns (Name, Salary)**:
        - **Actual**: The Name and Salary columns lack a width limit.
        - **Expected**: Limit the width of these columns to improve layout consistency.
        - **Severity**: Minor
        - **Priority**: Low

    - **#profile-page Link**:
        - **Actual**: The #profile-page link changes the URL but does not update the UI.
        - **Expected**: The UI should reflect the change when the link is clicked.
        - **Severity**: Major
        - **Priority**: Medium
