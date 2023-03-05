"use strict";
exports.__esModule = true;
var jira_client_1 = require("jira-client");
var jira = new jira_client_1["default"]({
    protocol: 'https',
    host: 'robertobean.atlassian.net',
    username: 'robcbean@gmail.com',
    apiVersion: '2'
});
jira.searchJira('Test Access and status in (Open, "In Progress")');
