import JiraApi from 'jira-client';

let message: string = "Hello World!!";
console.log(message);

var jira = new JiraApi({
    protocol: 'https',
    host: 'jira.somehost.com',
    username: 'username',
    password: 'password',
    apiVersion: '2',
    strictSSL: true
  });