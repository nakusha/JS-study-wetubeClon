//2.8 Router
import express from "express";
import routes from "../routes"
import { userDetail, editProfile, changePassword } from "../Controllers/userController";

const userRouter = express.Router();

// :id 떄문에 /users/edit-profile을 하면id로 인식해서 editprofile가 안떳었음
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);


export default userRouter;
/* 2.9
M   data
V   how does the data look
C   function that looks for the data
*/