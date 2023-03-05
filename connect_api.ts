interface ApiResponse{
  data: string;
}

async function fetchData(project_name:string, jira_token: string) {
  const response = await fetch(`https://robertobean.atlassian.net/rest/api/3/search?jql=project=${project_name}`,
    {
      method: 'GET',
      headers: new Headers(
        {
          'Authorization': jira_token,
          'Content-Type': 'application/json'
        }
      )
    }
  )
  const json = await response.json();
  return json as ApiResponse;
}


const credentials:string = `robcbean@gmail.com:${process.env.JIRA_TOKEN}`;
const base64_string = Buffer.from(credentials, 'ascii').toString('base64');
const jira_token:string = `Basic ${base64_string}`;
console.log(jira_token);


fetchData("TEST",jira_token)
  .then( response => console.log(`Response ${response.data}`) )
  .catch( error => console.log(`Error ${error}`));










