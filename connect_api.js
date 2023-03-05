var credentials = "robcbean@gmail.com:".concat(process.env.JIRA_TOKEN);
var base64_string = Buffer.from(credentials, 'ascii').toString('base64');
var jira_token = "Basic ".concat(base64_string);
console.log(jira_token);
var headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
headers.append("Authorization", jira_token);
var requestOptions = {
    method: 'GET',
    headers: headers
};
var search_url = "https://robertobean.atlassian.net/rest/api/3/search?jql=" + encodeURIComponent('status!="Done"');
console.log(search_url);
var issues = [];
fetch(search_url, requestOptions)
    .then(function (response) {
    var json_value = response.json();
    json_value.then(function (json) {
        json['issues'].forEach(function (issue) {
            issues.push(issue['key']);
            console.log(issue['key']);
            console.log(issues.length);
        });
    });
})["catch"](function (error) {
    console.error(error);
});
//fetchData("TEST",jira_token)
//  .then( response => console.log(`Response ${response.data}`) )
//  .catch( error => console.log(`Error ${error}`));
