const webdriverio = require('webdriverio');
const options = require('../../wdio.conf');
global.browser = webdriverio.remote(options).init();

const TipsAndTricksPage = require('../pages/tips-and-tricks.page');
const tipsAndTricksPage = new TipsAndTricksPage();

describe('1', () => {
  it('2', async () => {
    await tipsAndTricksPage.navigateTo();
    await tipsAndTricksPage.card.title.waitForVisible();
    expect(await tipsAndTricksPage.card.title.getText()).to.equal('test1');
  });
});
