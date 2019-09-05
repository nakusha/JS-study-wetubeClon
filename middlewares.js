import routes from "./routes";
import multer from "multer";

//multer file을 올리면 path가 반환됨
const multerVideo = multer({dest : "uploads/videos/"})
// pug에서 router에 접그한게 하기위한 middle ware
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
};

export const uploadVideo = multerVideo.single('videoFile')