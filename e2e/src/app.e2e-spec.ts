import { AppPage } from './app.po';
import { browser, by, ExpectedConditions } from 'protractor';

describe('workspace-project App', () => {
  it('should display welcome message', () => {
    browser.waitForAngularEnabled(false);

    browser.get('http://jqueryui.com/resources/demos/droppable/default.html');

    const columnA = browser.element(by.xpath('.//*[@id="draggable"]'));
    const columnB = browser.element(by.xpath('.//*[@id="droppable"]'));

    browser.wait(ExpectedConditions.visibilityOf(columnA), 5000);

    // browser
    //   .actions()
    //   .dragAndDrop(columnA, columnB)
    //   .perform();

    browser
      .actions()
      .mouseDown(columnA)
      .mouseMove(columnB, { x: 200, y: 200 })
      .mouseUp()
      .perform();

    browser.wait(ExpectedConditions.invisibilityOf(columnA), 5000);















      // .mouseDown(columnA)
      // // .mouseMove({x: -1, y: 1})
      // .mouseMove(columnB)
      // .mouseUp()
      // columnB.getLocation().then(async val => {
    //   await browser.actions().mouseDown(columnA).perform();
    //   await browser.pause(500);
    //   const x = Math.trunc(val.x);
    //   const y = Math.trunc(val.y);
    //   await browser.actions().mouseMove(columnB, { x: 10, y: 10 }).perform();
    //   return await browser.pause(10000);
    //     // .
    //     // then(() => {
    //     //   browser.pause(5000);
    //     //   browser.
    //     //     actions().
    //     //     mouseUp().
    //     //     perform();
    //     // });
    //     // });


    // });
  });
});
