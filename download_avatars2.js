var fs = require("fs");

var repoOwner = process.argv[2];
var repoName = process.argv[3];

var getRepoContributors = require("./download_avatar_modules.js");
var downloadingavatars = require("./downloadingavatars.js");

getRepoContributors(repoOwner, repoName, function(error, contributors) {
  if (error) { throw(error); }

  for (var contributor of contributors) {
    fs.existsSync(repoName) || fs.mkdirSync(repoName);
    var filePath = `./${repoName}/` + contributor.login + ".png";
    downloadingavatars(contributor.avatar_url, filePath);
  }

  return;

});

