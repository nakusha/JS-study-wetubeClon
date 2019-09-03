export const home = (req, res) => res.render("home");       // render .pug file name default folder path /views
export const search = (req, res) => res.send("SEARCH");

export const videos = (req, res) => res.send("videos");
export const videoDetail = (req, res) => res.send("videoDetail");
export const editVideo = (req, res) => res.send("editVideo");
export const deleteVideo = (req, res) => res.send("deleteVideo");
export const uploadVideo = (req, res) => res.send("upload Video");