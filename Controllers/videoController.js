export const home = (req, res) => res.render("home");       // render .pug file name default folder path /views
export const search = (req, res) => res.render("search");

export const videos = (req, res) => res.render("videos");
export const videoDetail = (req, res) => res.render("videoDetail");
export const editVideo = (req, res) => res.render("editVideo");
export const deleteVideo = (req, res) => res.render("deleteVideo");
export const uploadVideo = (req, res) => res.render("uploadVideo");