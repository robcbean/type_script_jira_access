"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var credentials = "robcbean@gmail.com:".concat(process.env.JIRA_TOKEN);
var base64_string = Buffer.from(credentials, 'ascii').toString('base64');
var jira_token = "Basic ".concat(base64_string);
console.log(jira_token);
var config = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": jira_token
    }
};
var search_url = "https://robertobean.atlassian.net/rest/api/3/search?jql=" + encodeURIComponent('status!="Done"');
console.log(search_url);
var issues = [];
axios_1["default"].get(search_url, config)
    .then(function (response) {
    var json_value = response.data;
    console.log(json_value);
    json_value['issues'].forEach(function (element) {
        console.log("Key : ".concat(element["key"], " "));
    });
})["catch"](function (error) {
    console.error(error);
});
