import routes from "./routes"

// pug에서 router에 접그한게 하기위한 middle ware
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    next();
};