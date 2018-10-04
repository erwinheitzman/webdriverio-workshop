import { Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { TipsAndTricksPage } from '../pages/tips-and-tricks.page';

const tipsAndTricksPage = new TipsAndTricksPage();

Given('I am on the tips and tricks page', () => {
  tipsAndTricksPage.navigateTo();
});

Then('Title should match {string}', (title) => {
  tipsAndTricksPage.card.title.waitForVisible();
  expect(tipsAndTricksPage.card.title.getText()).to.equal(title);
});

When('I type {string} into the searchbar', (input) => {
  tipsAndTricksPage.searchBar.setValue(input);
});
