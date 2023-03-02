"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jira_client_1 = require("jira-client");
var message = "Hello World!!";
console.log(message);
var jira = new jira_client_1.default({
    protocol: 'https',
    host: 'jira.somehost.com',
    username: 'username',
    password: 'password',
    apiVersion: '2',
    strictSSL: true
});
//# sourceMappingURL=helllo_world.js.map