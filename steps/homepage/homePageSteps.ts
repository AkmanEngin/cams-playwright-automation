import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { homePage } from '../../globalPagesSetup';
import { BrowserUtility } from '../../utilities/BrowserUtility';
import { HomePage } from '../../pages/HomePage';
import { env } from 'process';


Given('user is on the home page', async function () {
    await homePage.page.goto(homePage.isoneUrl);
});

Given('user is on CAMS home page', async function () {
    await homePage.page.goto(homePage.camsUrl);
  });


Then('user should be able to see title {string}', async function (string) {
    await expect(homePage.page).toHaveTitle(string);
});

Given('user enters {string} into the search bar', async function (string) {
 await homePage.enterSearchTerm(string);
});

When('user clicks on the search button', async function () {
await homePage.clickSearchButton();
});

Then('user should see {string} in the top {int} results', async function (expectedResult: string, resultsCount: number) {
for (let i = 0; i < resultsCount; i++) {
const actualResult = await homePage.verifySearchResult(i);

if (actualResult !== null) {
    expect(actualResult.toLowerCase()).toContain(expectedResult.toLowerCase());
} else {
    throw new Error(`Search result at position ${i} is null`);
}

}
});
