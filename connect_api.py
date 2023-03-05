#!/usr/bin/env python
import requests
import os
import base64


credentials:str = f"robcbean@gmail.com:{os.getenv('JIRA_TOKEN')}"
cred:str = "Basic " + base64.b64encode(credentials.encode()).decode("utf-8")

print(f"{cred}")

headers: dict = {
    "Accept": "application/json",
   "Content-Type": "application/json",
   "Authorization" : cred
}

project_name: str = "TEST"
url:str = f"https://robertobean.atlassian.net/rest/api/3/search?project={project_name}&limit=1000"
response = requests.request("GET", url, headers=headers)

#print(response.text)

#response_json_data:dict = json.loads(response.text)
#print(f"{response_json_data}")