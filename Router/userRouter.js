//2.8 Router
import express from "express";
import routes from "../routes"
import { users, userDetail, editProfile, changePassword } from "../Controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
/* 2.9
M   data
V   how does the data look
C   function that looks for the data
*/