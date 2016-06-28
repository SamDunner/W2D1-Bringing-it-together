var request = require("request");
require('dotenv').config();


var username = process.env.DB_USER
var password = process.env.DB_PASS

function getRepoContributors(repoOwner, repoName, callback) {
  request({
    url: `https://${username}:${password}@api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      // github requires a user-agent
      "User-Agent" : username
    }
  },
  function(error, response, body) {
    callback(error, JSON.parse(body));
  });
};

module.exports = getRepoContributors;