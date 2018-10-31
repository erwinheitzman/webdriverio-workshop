module.exports = class Dialog {
  get container()           { return $('mat-dialog-container'); }
  get close()               { return $('mat-dialog-actions button.mat-button'); }
  get content()             { return $('mat-dialog-content'); }
  get title()               { return $('h1.mat-dialog-title'); }
}
