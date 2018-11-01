const TipsAndTricksPage = require('../pages/tips-and-tricks.page');

const tipsAndTricksPage = new TipsAndTricksPage();

describe('tips and tricks page', () => {
  it('should search for a cat', () => {
    tipsAndTricksPage.navigateTo();
    tipsAndTricksPage.card.title.waitForVisible();
    tipsAndTricksPage.search.bar.setValue('cat');
    browser.waitUntil(() => tipsAndTricksPage.card.title.getText() === 'Yellow cat');
  });
});
