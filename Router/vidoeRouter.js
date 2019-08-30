import express from "express";
import routes from "../routes"
import { videos, videoDetail, editVideo, deleteVideo, uploadVideo } from "../Controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoUpload, uploadVideo);;
// 파일전체 export 변수앞에 붙으면 해당 변수만 export
export default videoRouter;