import { runInNewContext } from "vm";

export const home = (req, res) => res.render("home", { pageTitle: "Home" });       // render .pug file name default folder path /views
export const search = (req, res) => {
    //ES 6 이전방식
    //const searchingBy = req.query.term;
    //ES 6 방식
    // method가 get일경우에만 이렇게 접근가능
    const {
        // term의 이름을 바꿔줌
        query:{ term:searchingBy }
    } = req;
    
    res.render("search", { pageTitle: "search", searchingBy });
};

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle : "VideoDetail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle : "EditVideo" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : "Delete Video" });
export const uploadVideo = (req, res) => res.render("uploadVideo", { pageTitle : "Upload Video" });