var request = require("request");
var fs = require("fs");

function downloadingavatars(url, filePath) {

  request
    .get(url)
    .on('error', function(error) {
      console.log(error);
    })
    .pipe(fs.createWriteStream(filePath));
}

module.exports = downloadingavatars;