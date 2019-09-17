import routes from "./routes";
import multer from "multer";

//multer file을 올리면 path가 반환됨
const multerVideo = multer({dest : "uploads/videos/"})
// pug에서 router에 접그한게 하기위한 middle ware
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    res.locals.user = req.user || null
    next();
};

export const onlyPublic = (req, res, next) => {
    if (req.user){
        res.redirect(routes.home);
    }else{
        next();
    }
};

export const onlyPrivate = (req, res, next) => {
    if (req.user){
        next();
    }else{
        res.redirect(routes.home);
    }
};

export const uploadVideo = multerVideo.single('videoFile')
