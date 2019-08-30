//const express = require('express');
// using babel
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// user import
import {userRouter} from "./router";

const app = express();

// arrow function    
const handleHome = (req, res) => res.send('Hello form Home');
const handleProfile = (req, res) => res.send("You are on my profile");

//middle ware
//next middleware 인경우에만 사용 마지막 함수에는 넣지않아도됨
const betweenHome = (req, res, next) => {
    console.log("I'm between");
    next();
};

//2.6
//middle ware를 넣고 router(get, post)를 처리한다.
//router위에 있는middle ware만 적용됨

//app.use(betweenHome);

//2.7 morgan logging middle ware
//npm install body-parser
//npm install cookie-parser
//cookie와 body를 사용하기 편리하게해줌
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// npm install helmet 보안관련
app.use(helmet());
// npm install morgan 로깅관련
app.use(morgan("dev"));
//middle ware가 send를 호출하면 멈춤
const middleware = (req, res, next) => {
    res.send("not happening");
    next();
};

//router part
app.get("/", handleHome);
app.get("/profile", handleProfile);

//2.8 Router
//user로 접속하면 userRouter에 있는 내용을 사용한다.
app.use("/user", userRouter);


//2.5
//npm install @babel/node 
//npm install @bable/preset-env
//npm install을할떄 -D를 붙이면 dependency에 들어가지않고 설치가 됨(devDependencies)
// npm install nodemon -D
//"start": "nodemon --exec babel-node index.js" 를하면 저장할때마다 다시 시작이됨 

// 2.8
// 다른 ㅍ파일에서 app을 import 를 가능하게 해줌
export default app;