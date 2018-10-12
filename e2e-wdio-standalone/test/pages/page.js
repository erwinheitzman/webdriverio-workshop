module.exports = class Page {
  navigateTo(uri) {
    return browser.url(uri);
  }
}
