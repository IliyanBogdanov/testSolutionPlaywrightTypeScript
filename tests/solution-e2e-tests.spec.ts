import { test, expect } from '@playwright/test';


test('User is able to see page URL consists of /people section', async ({ page }) => {
  // Navigate to the people page
  await page.goto('http://localhost:3002/people');

  // Expect the URL to consist of a substring /people/.
  await expect(page).toHaveURL(/people/);
});

test('User is able to use the search functionality', async ({ page }) => {
  // Navigate to the people page
  await page.goto('http://localhost:3002/people');

  // Find the search box element
  const searchbox = page.getByRole('searchbox');

  // Click on the search box to activate it
  searchbox.click();

  // Type 'Ann' into the search box
  await searchbox.fill('Ann');

  // Wait for the search results element to appear
  const elementHandle = await page.waitForSelector('span.sc-hhOBVt.fHEiyB');

  // Wait for the search results to fully load
  await page.waitForLoadState('networkidle');

  // Get the text content of the search results element
  const textContent = await elementHandle.textContent();

  // Expect that the search result matches the expected condition ('2 members')
  expect(textContent).toEqual('2 members');

});

test('User is able to add a new member', async ({ page }) => {
  // Navigate to the people page
  await page.goto('http://localhost:3002/people');

  // Click on the "Add member" button
  await page.getByText('Add member').click();

  // Fill in the name field with "Iliyan"
  await page.getByPlaceholder('Name').fill('Iliyan');

  // Fill in the job title field with "SQA"
  await page.getByPlaceholder('Job title').fill('SQA');

  // Click on the country input field
  await page.locator('[data-test-id="country-input"]').click();

  // Wait for the country input field to appear
  await page.waitForSelector('[data-test-id="country-input"]');

  // Select the option "Italy" from the country dropdown
  await page.selectOption('[data-test-id="country-input"]', { label: 'Italy' });

  // Click on the currency input field
  await page.locator('[data-test-id="currency-input"]').click();

  // Wait for the currency input field to appear
  await page.waitForSelector('[data-test-id="currency-input"]');

  // Select the option "GBP" from the currency dropdown
  await page.selectOption('[data-test-id="currency-input"]', { label: 'GBP' });

  // Fill in the salary field with "100000"
  await page.getByPlaceholder('Salary').fill('100000');

  // Click on the employment input field
  await page.locator('[data-test-id="employment-input"]').click();

  // Wait for the employment input field to appear
  await page.waitForSelector('[data-test-id="employment-input"]');

  // Select the option "employee" from the employment dropdown
  await page.selectOption('[data-test-id="employment-input"]', { label: 'employee' });

  // Click on the "Save" button to save the new member
  await page.getByText('Save').click();
});


