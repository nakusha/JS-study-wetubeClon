import routes from "../routes";
import Video from "../models/Video";

//async
export const home = async(req, res) => {
    try{
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos });       // render .pug file name default folder path /views
    }catch(error){
        console.log(error);
        res.render("home", { pageTitle:" Home", videos: []});
    }
};

export const search = (req, res) => {
    //ES 6 이전방식
    //const searchingBy = req.query.term;
    //ES 6 방식
    // method가 get일경우에만 이렇게 접근가능
    const {
        // term의 이름을 바꿔줌
        query:{ term:searchingBy }
    } = req;
    
    res.render("search", { pageTitle: "search", searchingBy, videos });
};

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle : "VideoDetail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle : "EditVideo" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : "Delete Video" });


export const getUploadVideo = (req, res) => res.render("uploadVideo", { pageTitle : "Upload Video" });
export const postUploadVideo = (req, res) => {
    const {
        body: { file, title, description }
    } = req;
    // To Do: Upload and Save Video
    res.redirect(routes.videoDetail(123123));
};