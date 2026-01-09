

const express= require("express");
const fs = require("fs");
const path = require("path");
const TASKS_FILE = path.join(__dirname, "tasks.json");
const app = express();
app.use(express.json());
let tasks=[
    {id:1, title:"Morning Workout",status:"completed"},
    {id:2, title:"Revise JS",status:"in progress"},
    {id:3, title:" Pay electricity bill",status:"not completed"},
];
app.get("/api", (req, res) => {
    res.send("Hello user welcome");
});
app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});
app.get("/api/tasks/:id",(req,res)=>{
    const id=Number(req.params.id);  // params will give route parameters as strings so we convert it to number
    const task=tasks.find(task=>task.id===id); // find method returns the first element in the array that satisfies the provided testing function
    return res.json(task);  // array.find(element=> condition) syntax and ==== checks value as well as data type so this is used here
});
app.post("/api/tasks",(req,res)=>{
    const newId=tasks.length+1;
    const newtask=Object.assign({id:newId},req.body);
    tasks.push(newtask);
    console.log(tasks);
    return res.status(201).json(newtask); // 201 status code indicates that the request has been fulfilled and has resulted in one or more new resources being created.
});



app.listen(3000, (error) => {
    if (error) {
    throw error;
  }
    console.log("server running on port 3000");
});


