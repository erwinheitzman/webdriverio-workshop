describe('drag and drop -> remove elements', () => {
  before(() => {
    browser.url('https://marcojakob.github.io/dart-dnd/basic/');
  });

  it('should drag the first item to the bin', () => {
    browser.dragAndDrop('.document', '.trash');
    expect($$('.document').length).to.equal(3);
  });
  it('should drag the second item to the bin', () => {
    browser.dragAndDrop('.document', '.trash');
    expect($$('.document').length).to.equal(2);
  });
  it('should drag the third item to the bin', () => {
    browser.dragAndDrop('.document', '.trash');
    expect($$('.document').length).to.equal(1);
  });
  it('should drag the fourth item to the bin', () => {
    browser.dragAndDrop('.document', '.trash');
    expect($$('.document').length).to.equal(0);
  });
  it('should have filled the trashbin', () => {
    expect($('.trash').getAttribute('class').includes('full')).to.be.true;
  });
});
