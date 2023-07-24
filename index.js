import bodyParser from "body-parser";
import express from "express";
let listOfTask;
let fullDate;
const app = express()
const date = new Date()


const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };



app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    let string = JSON.string(listOfTask)
    localStorage.setItem("key", string)
    res.render("index.ejs",{tasks : listOfTask,date : date.toLocaleDateString('en-US', options) })
})


app.post("/",(req,res)=>{
   
    listOfTask = [req.body["task"]]

   

    fullDate = date.toLocaleDateString('en-US', options)
    res.render("index.ejs",{tasksList : listOfTask, date : fullDate})
})





app.listen(3000,()=>{
    console.log("Listening on port : 3000");
})