const AboutMePage = require('../../pages/about-me');

const aboutMePage = new AboutMePage();

describe('about me page', () => {
  before(() => {
    aboutMePage.navigateTo();
    aboutMePage.name.waitForVisible();
  });

  describe('forms', () => {
    it('should fill in the form completely', () => {
      const name = 'Erwin';
      const date = '01-11-2018';
      const email = 'dummymail@example.com';
      const attribute = 'Vitality';
      const message = 'This is a test!';

      aboutMePage.name.setValue(name);
      aboutMePage.date.setValue(date);
      aboutMePage.email.setValue(email);
      aboutMePage.selectByVisibleText(attribute);
      aboutMePage.message.setValue(message);

      expect(aboutMePage.name.getValue()).to.equal(name);
      expect(aboutMePage.date.getValue()).to.equal(date.split('-').reverse().join('-'));
      expect(aboutMePage.email.getValue()).to.equal(email);
      expect(aboutMePage.selectedAttribute.getText()).to.equal(attribute);
      expect(aboutMePage.message.getValue()).to.equal(message);
    });

    it('should submit the form and open a dialog', () => {
      aboutMePage.submit.click();
      aboutMePage.dialog.container.waitForVisible();
    });

    it('should assert the title and content of the dialog', () => {
      const title = aboutMePage.dialog.title.getText();
      const content = aboutMePage.dialog.content.getText();
      expect(title).to.equal('Thank you!');
      expect(content).to.equal('Your message has been sent');
    });

    it('should close the dialog', () => {
      aboutMePage.dialog.close.click();
      aboutMePage.dialog.container.waitForVisible(null, true);
    });
  });

});
