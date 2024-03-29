import express from "express";
import passport from "passport";
import routes from "../routes";

import { home, search } from "../Controllers/videoController";
import { getJoin, postJoin, logout, getLogin, postLogin, githubLogin, postGithubLogin } from "../Controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);

globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(routes.githubCallback, passport.authenticate('github', { failureRedirect: '/login' }), postGithubLogin);
export default globalRouter;