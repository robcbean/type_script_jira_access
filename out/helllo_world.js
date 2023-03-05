"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jira_client_1 = __importDefault(require("jira-client"));
var jira = new jira_client_1.default({
    protocol: 'https',
    host: 'robertobean.atlassian.net',
    username: 'robcbean@gmail.com',
    apiVersion: '2'
});
jira.searchJira('Test Access and status in (Open, "In Progress")');
//# sourceMappingURL=helllo_world.js.map