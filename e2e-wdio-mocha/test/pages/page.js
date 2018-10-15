module.exports = class Page {
  navigateTo(path) {
    browser.url(path);
  }
}
