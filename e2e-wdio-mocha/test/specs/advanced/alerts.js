const waitForAlertDisplayed; // TODO - wait for alert method

describe('alerts', () => {

  beforeEach(async () => {
    browser.execute(async () => setTimeout(() => alert('HI!'), 2000));
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
    expect(() => browser.alertText()).to.throw('no such alert');
  });

  it('should fail on timeout', () => {
    expect(() => waitForAlertDisplayed(200)).to.throw('Promise was rejected with the following reason: timeout');
  });

  it('should fail on timeout with a different message', () => {
    expect(() => waitForAlertDisplayed(200, 'FAILED!')).to.throw('FAILED!');
  });
});
