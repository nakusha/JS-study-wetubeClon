import express from "express";
import routes from "../routes"

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.send('videos'));
videoRouter.get(routes.videoDetail, (req, res) => res.send('videosDetail'));
videoRouter.get(routes.editVideo, (req, res) => res.send('Edit Videos'));
videoRouter.get(routes.deleteVideo, (req, res) => res.send('Delete Videos'));
videoRouter.get(routes.videoUpload, (req, res) => res.send('Upload Videos'));
// 파일전체 export 변수앞에 붙으면 해당 변수만 export
export default videoRouter;