# TASK-MANAGER_API DOCUMENTATION
## This is a simple CRUD API built with Node.js .The various routes have been explained below
## 1) GET ALL TASKS
This route returns all the tasks 
* [Example response](https://taskapi-amardeep.herokuapp.com/api/v1/tasks) : ` GET https://taskapi-amardeep.herokuapp.com/api/v1/tasks`
## 2)GET A SINGLE TASK
* [Get a single ](https://taskapi-amardeep.herokuapp.com/api/v1/tasks/6180157f0382a815c86bcf42) : `GET https://taskapi-amardeep.herokuapp.com/api/v1/tasks/:taskid`
## 3)CREATE A NEW TASK
* Post  Route :`POST https://taskapi-amardeep.herokuapp.com/api/v1/tasks`
* JSON BODY :`{
    "name":"Make a node.js",
    "completed":false
}`
## 4)UPDATE A TASK
* Patch Route:`POST https://taskapi-amardeep.herokuapp.com/api/v1/tasks/:taskid`
* JSON BODY :`{
    "name":"Make a node.js",
    "completed":true
}`
## 5) DELETE A TASK
*  Delete Route: `POST https://taskapi-amardeep.herokuapp.com/api/v1/tasks/:taskid`


