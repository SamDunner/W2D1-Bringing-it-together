var fs = require("fs");

var repoOwner = process.argv[2];
var repoName = process.argv[3];

if(process.argv.length !== 4) {
  console.log("Incorrect number of arguments, use this format: node fileName.js repoOwner repoName");
  return
}

var getRepoContributors = require("./download_avatar_modules.js");
var downloadingavatars = require("./downloadingavatars.js");

getRepoContributors(repoOwner, repoName, function(error, contributors) {

  if (error) { throw(error); }

  fs.existsSync(repoName) || fs.mkdirSync(repoName);

  for (var contributor of contributors) {

    var filePath = `./${repoName}/` + contributor.login + ".png";
    downloadingavatars(contributor.avatar_url, filePath);
  }

  return;

});

