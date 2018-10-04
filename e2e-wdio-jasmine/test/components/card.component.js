module.exports = class Card {
  get title() {
    return $('.mat-card-title');
  }

  get subTitle() {
    return $('.mat-card-subtitle');
  }

  get content() {
    return $('.mat-card-content');
  }
}
