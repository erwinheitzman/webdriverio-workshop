const webdriverio = require('webdriverio');
const options = require('./wdio.conf');

webdriverio
  .remote(options)
  .init()
  .url('tips-and-tricks')
  .element('.mat-card-title')
  .getText().then(text => {
    console.log('Title was: ', text);
  })
  .end()
  .catch(function(err) {
      console.log(err);
  });
