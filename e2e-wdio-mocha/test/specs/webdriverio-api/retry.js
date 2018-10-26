const TipsAndTricksPage = require('../../pages/tips-and-tricks.page');

const tipsAndTricksPage = new TipsAndTricksPage();

let shouldRetry = true;

describe('tips and tricks page', () => {
  before(() => {
    tipsAndTricksPage.navigateTo();
    tipsAndTricksPage.card.title.waitForVisible();
  });

  describe('search', () => {
    it('should filter by "cat"', () => {
      if (shouldRetry) {
        shouldRetry = false;
        console.log('test failed');
        browser.waitForExist('#does-not-exist', 500);
      } else {
        tipsAndTricksPage.search.bar.setValue('cat');
        browser.waitUntil(() => tipsAndTricksPage.card.title.getText() === 'Yellow cat');
      }
    });
  });
});
