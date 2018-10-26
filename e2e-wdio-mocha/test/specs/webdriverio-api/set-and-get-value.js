const TipsAndTricksPage = require('../../pages/tips-and-tricks.page');

const tipsAndTricksPage = new TipsAndTricksPage();

describe('tips and tricks page', () => {
  before(() => {
    tipsAndTricksPage.navigateTo();
    tipsAndTricksPage.card.title.waitForVisible();
  });

  describe('search', () => {
    it('should filter by "cat"', () => {
      tipsAndTricksPage.search.bar.setValue('cat');
      browser.waitUntil(() => tipsAndTricksPage.card.title.getText() === 'Yellow cat');
    });

    it('should filter by "pup"', () => {
      tipsAndTricksPage.search.bar.setValue('pup');
      browser.waitUntil(() => tipsAndTricksPage.card.title.getText() === 'Playing puppies');
    });
  });

});
