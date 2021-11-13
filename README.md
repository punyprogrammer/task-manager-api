# TASK-MANAGER_API DOCUMENTATION
## This is a simple CRUD API built with Node.js .The various routes have been explained below
## 1) GET ALL TASKS
This route returns all the tasks 
* Get Route: ` GET https://taskapi-amardeep.herokuapp.com/api/v1/tasks`
* Response Format:`{
    "tasks": [
        {
            "completed": false,
            "_id": "6180157f0382a815c86bcf42",
            "name": "Solved 300",
            "__v": 0
        },
        {
            "completed": true,
            "_id": "618019aa6c2ad211c8c9965e",
            "name": "Make  Horlicks",
            "__v": 0
        },
        
    ]
}`
## 2)GET A SINGLE TASK
* Get Route: `GET https://taskapi-amardeep.herokuapp.com/api/v1/tasks/:taskid`
* Response Format:`{
    "task": {
        "completed": false,
        "_id": "6180157f0382a815c86bcf42",
        "name": "Solved 300",
        "__v": 0
    }
}`
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


