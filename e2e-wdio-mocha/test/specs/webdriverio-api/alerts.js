const waitForAlertDisplayed = (timeout, message, invertCondition) =>
  browser.waitUntil(function() {
    return this.alertText()
      .then(() => !invertCondition, () => !!invertCondition);
  }, timeout, message);

let num = 0;

describe('alerts', () => {

  before(() => {
    browser.url('/');
  });

  beforeEach(() => {
    if (num) {
    browser.execute(() => setTimeout(() => alert('HI!'), 2000));
    } else {
      num++;
    }
  });

  afterEach(() => {
    browser.reload();
  });

  it('should wait for the alert', () => {
    const begin = Date.now();
    waitForAlertDisplayed();
    const duration = (Date.now() - begin);
    expect(duration).to.be.above(2000);
    expect(browser.alertText()).to.equal('HI!');
  });

  it('should accept the alert and wait for the alert to close', () => {
    waitForAlertDisplayed();
    expect(browser.alertText()).to.equal('HI!');
    browser.alertDismiss();
    waitForAlertDisplayed(null, null, true);
  });

  it('should fail on timeout', () => {
    expect(() => waitForAlertDisplayed(200)).to.throw('Promise was rejected with the following reason: timeout');
  });

  it('should fail on timeout with a different message', () => {
    expect(() => waitForAlertDisplayed(200, 'FAILED!')).to.throw('FAILED!');
  });
});
