//const express = require('express');
// using babel
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./Router/userRouter";
import videoRouter from "./Router/vidoeRouter";
import globalRouter from "./Router/globalRouter";
import routes from "./routes"
import { localsMiddleware } from "./middlewares";

const app = express();

app.set('view engine', "pug");      //npm install pug (View Engine)
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());              // 보안
app.use(morgan("dev"));         // 로그

app.use(localsMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
