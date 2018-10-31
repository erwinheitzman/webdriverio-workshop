import { Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { TipsAndTricksPage } from '../pages/tips-and-tricks.page';

const tipsAndTricksPage = new TipsAndTricksPage();

Given('I am on the tips and tricks page', () => {
  tipsAndTricksPage.navigateTo();
});

When('I type {string} into the searchbar', (input) => {
  tipsAndTricksPage.search.bar.setValue(input);
});

Then('Title should match {string}', (title) => {
  tipsAndTricksPage.card.title.waitForVisible();
  expect(tipsAndTricksPage.card.title.getText()).to.equal(title);
});

Then('Title should match {string} eventually', (title) => {
  tipsAndTricksPage.card.title.waitForVisible();
  browser.waitUntil(() => tipsAndTricksPage.card.title.getText() === title);
});
