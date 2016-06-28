var request = require("request");
require('dotenv').config();

var username = process.env.DB_USER
var password = process.env.DB_PASS
  if(username === undefined || password === undefined) {
  throw "Missing .env file, please fix naming or add link between files"
  }

function getRepoContributors(repoOwner, repoName, callback) {
  request({
    url: `https://${username}:${password}@api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      // github requires a user-agent
      "User-Agent" : username
    }
  },
  function(error, response, body) {
    if (error)
      throw "console.log error"
    else if (response.statusCode !== 200)
      throw "console.log response.statusCode"
    callback(error, JSON.parse(body));
  })
};

module.exports = getRepoContributors;