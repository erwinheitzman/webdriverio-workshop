const { expect } = require('chai');
const TipsAndTricksPage = require('../pages/tips-and-tricks.page');

const tipsAndTricksPage = new TipsAndTricksPage();

describe('a', () => {
  it('b', () => {
    tipsAndTricksPage.navigateTo();
    tipsAndTricksPage.card.title.waitForVisible();
    expect(tipsAndTricksPage.card.title.getText()).to.equal('Golden Retriever');
  });
});
