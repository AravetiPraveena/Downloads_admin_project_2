const express= require('express')
const cors= require('cors')
const nodemon=require('nodemon')
const mysql= require('mysql')
const bcrypt=require('bcryptjs')
const app=express();
app.use(express.json());
app.use(cors());
const db= mysql.createConnection(
    {
        host:'localhost',
        user:"root",
        password:"",
        database:"login_credentials"
    }
)

app.get('/',(req,res)=>{
    res.send("hi this is from server");
})

app.post('/register',async(req,res)=>{
    try{
        //i have to get data from the body
        //all the data should exist
        //check if user already exists 
        //encrypt the password
        //save the user in DB
        //generate a token for user and send it

    }
    catch{
        console.log("hey error happened in database ")
    }
})







app.listen(5007,()=>{
    console.log("listening in project")
})

