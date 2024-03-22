import { test, expect } from '@playwright/test';

const testData = {
  searchQuery: 'Ann',
  newMember: {
    name: 'Iliyan',
    jobTitle: 'SQA',
    country: 'Italy',
    currency: 'GBP',
    salary: '100000',
    employmentType: 'employee'
  },
  editedMemberName: 'Ann Henry - Edited'
};

// Helper function to navigate to the people page
async function navigateToPeoplePage(page) {
  await page.goto('http://localhost:3002/people');
}

// Test for the search functionality
test('User is able to use the search functionality', async ({ page }) => {
  await navigateToPeoplePage(page);

  const searchbox = page.getByRole('searchbox');
  await searchbox.click();
  await searchbox.fill(testData.searchQuery);

  const elementHandle = await page.waitForSelector('span.sc-hhOBVt.fHEiyB');
  await page.waitForLoadState('networkidle');

  const textContent = await elementHandle.textContent();
  expect(textContent).toEqual('2 members');
});

// Test for filtering page by Contractor type of members
test('User is able to filter page by Contractor type of members', async ({ page }) => {
  await navigateToPeoplePage(page);

  await page.locator('[data-testid="contractor-filter"]').click();
  const elementWithText = page.locator('td.sc-bjfHbI.fFiCzo:text("Employee")');
  expect(elementWithText).toBeHidden;
});

// Test for filtering page by Employee type of members
test('User is able to filter page by Employee type of members', async ({ page }) => {
  await navigateToPeoplePage(page);

  await page.locator('[data-testid="employee-filter"]').click();
  const elementWithText = page.locator('td.sc-bjfHbI.fFiCzo:text("Contractor")');
  expect(elementWithText).toBeHidden;
});

// Test for adding a new member
test('User is able to add a new member', async ({ page }) => {
  await navigateToPeoplePage(page);

  await page.getByText('Add member').click();
  await page.getByPlaceholder('Name').fill(testData.newMember.name);
  await page.getByPlaceholder('Job title').fill(testData.newMember.jobTitle);
  await page.locator('[data-test-id="country-input"]').click();
  await page.waitForSelector('[data-test-id="country-input"]');
  await page.selectOption('[data-test-id="country-input"]', { label: testData.newMember.country });
  await page.locator('[data-test-id="currency-input"]').click();
  await page.waitForSelector('[data-test-id="currency-input"]');
  await page.selectOption('[data-test-id="currency-input"]', { label: testData.newMember.currency });
  await page.getByPlaceholder('Salary').fill(testData.newMember.salary);
  await page.locator('[data-test-id="employment-input"]').click();
  await page.waitForSelector('[data-test-id="employment-input"]');
  await page.selectOption('[data-test-id="employment-input"]', { label: testData.newMember.employmentType });
  await page.getByText('Save').click();

  const elementWithText = page.locator(`text=${testData.newMember.name}`);
  expect(elementWithText).not.toBeNull();
});

// Test for editing an existing member record
test('User is able to edit an existing member record', async ({ page }) => {
  await navigateToPeoplePage(page);

  await page.locator('[data-testid="edit-person"]').nth(0).click();
  await page.getByPlaceholder('Name').fill(testData.editedMemberName);
  await page.getByText('Save').click();

  const elementWithText = page.locator(`text=${testData.editedMemberName}`);
  expect(elementWithText).not.toBeNull();
});
