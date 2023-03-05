import JiraApi from 'jira-client'


const jira:JiraApi = new JiraApi(
  {
    protocol: 'https',
    host: 'robertobean.atlassian.net',
    username: 'robcbean@gmail.com',
    apiVersion: '2'
  }
);

jira.searchJira('Test Access and status in (Open, "In Progress")')
