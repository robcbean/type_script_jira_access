


const credentials:string = `robcbean@gmail.com:${process.env.JIRA_TOKEN}`;
const base64_string = Buffer.from(credentials, 'ascii').toString('base64');
const jira_token:string = `Basic ${base64_string}`;
console.log(jira_token);

const headers: Headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json")
headers.append("Authorization", jira_token)

const requestOptions: RequestInit = {
  method: 'GET',
  headers: headers
};


const search_url:string = `https://robertobean.atlassian.net/rest/api/3/search?jql=`  + encodeURIComponent('status!="Done"');
console.log(search_url);


let issues: string [] = [];

fetch(search_url, requestOptions)
  .then(
    response => {
       const json_value = response.json();
       json_value.then(
         json => 
          { 
              json['issues'].forEach(issue => {
                issues.push(issue['key']);
                console.log(issue['key']);
                console.log(issues.length);
              });
          }
       )
    }
  )
  .catch(
      error => 
      {
          console.error(error);
      }
  );


//fetchData("TEST",jira_token)
//  .then( response => console.log(`Response ${response.data}`) )
//  .catch( error => console.log(`Error ${error}`));











