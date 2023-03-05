import JiraClient = require('jira-client');


const jira:JiraClient = new JiraClient(
  {
    protocol: 'https',
    host: 'robertobean.atlassian.net',
    username: 'pepe@gmail.com',
    apiVersion: '2',
    strictSSL: true
  }
);

/*const resultsJira = jira.searchJira('');

resultsJira.then( results => 
  console.log(results)
)
*/

jira.findIssue("Test3").then( issue => { console.log(`Status ${issue.fields.status.name}`)});

console.log("Hello World!!");










