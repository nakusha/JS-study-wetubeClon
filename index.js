//const express = require('express');
// using babel
import express from "express";


const app = express();

const PORT = 4000;

//arrow function
const handleListening = () =>
    console.log(`Listening on: https://localhost:${PORT}`);
const handleHome = (req, res) => res.send('Hello form Home');
const handleProfile = (req, res) => res.send("You are on my profile");

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);

//npm install @babel/node 
//npm install @bable/preset-env
//npm install을할떄 -D를 붙이면 dependency에 들어가지않고 설치가 됨(devDependencies)
// npm install nodemon -D
//"start": "nodemon --exec babel-node index.js" 를하면 저장할때마다 다시 시작이됨 