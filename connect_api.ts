
import axios from 'axios';

const credentials:string = `robcbean@gmail.com:${process.env.JIRA_TOKEN}`;
const base64_string = Buffer.from(credentials, 'ascii').toString('base64');
const jira_token:string = `Basic ${base64_string}`;
console.log(jira_token);




const config = {
  headers: {
    "Content-Type" : "application/json",
    "Accept": "application/json",
    "Authorization": jira_token
  }
}


const search_url:string = `https://robertobean.atlassian.net/rest/api/3/search?jql=`  + encodeURIComponent('status!="Done"');
console.log(search_url);


let issues: string [] = [];

axios.get(search_url, config)
  .then(
    response => {
      
       const json_value = response.data;
       console.log(json_value);

       json_value['issues'].forEach(element => {
          console.log(`Key : ${element["key"]} `);
       });
       
       
    }
  )
  .catch(
      error => 
      {
          console.error(error);
      }
  );











