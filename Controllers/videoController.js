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

export const videoDetail = async(req, res) => {
    const {
        params: { id }
    } = req;
    try{
        const video = await Video.findById(id);
        console.log(video);
        res.render("videoDetail", { pageTitle : video.title, video });
    }catch(error){
        console.log(error.description);
        res.redirect(routes.home);
    }
    
};

export const getEditVideo = async(req, res) => {
    const {
        params: { id }
    } = req;
    try{
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle:`Edit ${video.title}`, video });
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
};

export const postEditVideo = async(req, res) => {
    const {
        params: { id },
        body: { title, description }
    } = req;
    try{
        await Video.findByIdAndUpdate({ _id:id }, { title, description });
        res.redirect(routes.videoDetail(id));
    }catch(error){
        res.redirect(routes.home);
    }
};

export const deleteVideo = async(req, res) => {
    const {
        params: { id }
    } = req;
    try{
        await Video.findOneAndRemove({ _id:id });
    }catch(error){
        console.log(error.description);
    }
    res.redirect(routes.home);
};


export const getUploadVideo = (req, res) => res.render("uploadVideo", { pageTitle : "Upload Video" });
export const postUploadVideo = async (req, res) => {
    const {
        body: { title, description },
        file : { path }
    } = req;
    // To Do: Upload and Save Video
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });

    console.log(newVideo)
    
    res.redirect(routes.videoDetail(newVideo.id));
};