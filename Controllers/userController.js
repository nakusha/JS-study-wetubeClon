import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("join");
};

export const postJoin = async (req, res, next) => {
    //body parser에 의하여 정상적으로 console log에 찍힘
    console.log(req.body);
    const {
        body:{name, email, password, password2}
    } = req;

    if (password !== password2){
        res.status(400);
        res.render("join", {pageTitle: "Join"});
    }else{
        try{
            const user = await User({
                name,
                email
            });
            await User.register(user, password);
            next();
        }catch(error){
            console.log(error);
            res.redirect(routes.home);
        }
    }
    
};

export const getLogin = (req, res) => {
    res.render("login");
};

export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home
});

export const githubLoginCallback = (accessToken, refreshToken, profile, cb) => {
    console.log(accessToken, refreshToken, profile, cb);
    /*
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
        return cb(err, user);
    });
    */
}

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
};

export const users = (req, res) => res.render("users");
export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");
