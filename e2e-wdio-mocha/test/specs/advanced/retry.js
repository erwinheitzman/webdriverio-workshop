let shouldRetry = true;

describe('retry', () => {
  it('should retry the test after failing the first time', () => {
    if (shouldRetry) {
      shouldRetry = false;
      console.log('test fails, retrying...');
      expect(true).to.equal(false);
    } else {
      expect(true).to.equal(true);
    }
  });
});
