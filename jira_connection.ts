


function generateCredentialString(user_name:string, user_token:string): string 
{
    const credentials:string = `${user_name}:${user_token}`;
    const ret:string = Buffer.from(credentials, 'ascii').toString('base64');
    return ret;
}

function generateRequestHeader(user_name:string, user_token:string): Headers
{
    let ret_headers: Headers = new Headers();

    ret_headers.append("Content-Type", "application/json");
    ret_headers.append("Accept", "application/json");
    ret_headers.append("Authorization", generateCredentialString(user_name,user_token));

    return ret_headers;
}

function generateSearchURL(user_domain:string, search_string:string): string 
{
    let ret:string = `https://${user_domain}/rest/api/3/search?jql=`  + encodeURIComponent(search_string);
    return ret;
}

async function getJiraList(user_domain:string, user_name:string, user_token:string): Promise<{[key: string]: string}[]>
{
    let ret:{[key: string]: string}[] = [];
    const requestOptions: RequestInit = {
        method: "GET",
        headers: generateRequestHeader(user_name, user_token)
    };

    const response = await fetch(
        generateSearchURL(user_domain, 'status != "Done" '),requestOptions
    );

    const json_value = await response.json();
    json_value['issues'].forEach( issue => {
            ret[issue['key']] = issue['name'];
        }
    );
    return ret;
}
    

const USER_DOMAIN:string = "robertobean.atlassian.net";
const USER_NAME:string = "robcbean@gmail.com";
const JIRA_TOKEN:string = process.env.JIRA_TOKEN;

getJiraList(USER_DOMAIN, USER_NAME, JIRA_TOKEN).then(jira_tasks =>{
    console.log(jira_tasks);
}).catch( error => {
    console.log(console.error());
});
