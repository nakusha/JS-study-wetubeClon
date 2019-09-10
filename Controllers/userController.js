import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("join");
};

export const postJoin = async (req, res) => {
    //body parser에 의하여 정상적으로 console log에 찍힘
    console.log(req.body);
    const {
        body:{name, email, password, password2}
    } = req;

    if (password !== password2){
        res.status(400);
        res.render("join", {pageTitle: "Join"});
    }else{
        // Register User
        try{
            const user = await User.create({
                name,
                email
            });
            await User.register(user, password);
        }catch(error){
            console.log(error);
        }
        // To Do: Log user In
        res.redirect(routes.home);
    }
    
};

export const getLogin = (req, res) => {
    res.render("login");
};

export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    // To Do: Process Logout
    res.redirect(routes.home);
};

export const users = (req, res) => res.render("users");
export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");
