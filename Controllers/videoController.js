export const home = (req, res) => res.render("home", { pageTitle: "Home" });       // render .pug file name default folder path /views
export const search = (req, res) => res.render("search", { pageTitle : "Search" });

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle : "VideoDetail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle : "EditVideo" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : "Delete Video" });
export const uploadVideo = (req, res) => res.render("uploadVideo", { pageTitle : "Upload Video" });