const TipsAndTricksPage = require('../pages/tips-and-tricks.page');

const tipsAndTricksPage = new TipsAndTricksPage();

describe('tips and tricks page', () => {
  it('should validate that the page is loaded with content', () => {
    tipsAndTricksPage.navigateTo();
    tipsAndTricksPage.card.title.waitForVisible();
    expect(tipsAndTricksPage.card.title.getText()).to.equal('Golden Retriever');
  });
});
