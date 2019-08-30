//const express = require('express');
// using babel
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// user Custom import
import userRouter from "./Router/userRouter";
import videoRouter from "./Router/vidoeRouter";
import globalRouter from "./Router/globalRouter";
import routes from "./routes"

const app = express();

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

//2.8 Router
//user로 접속하면 userRouter에 있는 내용을 사용한다.
//Router은 주소만 정의해놓는것 controller가 아니다.
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;

//2.5
//npm install @babel/node 
//npm install @bable/preset-env
//npm install을할떄 -D를 붙이면 dependency에 들어가지않고 설치가 됨(devDependencies)
// npm install nodemon -D
//"start": "nodemon --exec babel-node index.js" 를하면 저장할때마다 다시 시작이됨 

// 2.8
// 다른 ㅍ파일에서 app을 import 를 가능하게 해줌
