"use strict";
exports.__esModule = true;
var JiraClient = require("jira-client");
var jira = new JiraClient({
    protocol: 'https',
    //host: 'robertobean.atlassian.net',
    username: 'pepe@gmail.com',
    bearer: 'ATATT3xFfGF0yOx1btS4lQve4fk4vMms3yINmo1eTU66jshzK-mHSB_mwSxd6QJdjRQyN-Trd8lWOZmoBBMYnKcQIa7AkzUWvR0oBQiR7oO2TEuoysYCp39TORpJO0WFpOMENWwdPxSfHMt-8GM3Vv4Gsm2z-2LEeId09z8FLXJuRByfUG9zkzQ=F013EF07',
    apiVersion: '2',
    strictSSL: true
});
/*const resultsJira = jira.searchJira('');

resultsJira.then( results =>
  console.log(results)
)
*/
jira.findIssue("Test3").then(function (issue) { console.log("Status ".concat(issue.fields.status.name)); });
console.log("Hello World!!");
