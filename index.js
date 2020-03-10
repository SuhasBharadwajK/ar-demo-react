express = require('express');
spdy = require('spdy');

var app = express();
app.use(express.static(__dirname + '/public'));

spdy.createServer({
    spdy: {
      plain: true
    }
  }, app).listen(1984, (err) => {
    if (err) {
      console.log('Failed to setup plain server, ', err);
      return process.exit(1);
    }
});