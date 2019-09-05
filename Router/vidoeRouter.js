import express from "express";
import routes from "../routes"
import { videoDetail, editVideo, deleteVideo, getUploadVideo, postUploadVideo } from "../Controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.videoUpload, getUploadVideo);;
videoRouter.post(routes.videoUpload, uploadVideo, postUploadVideo);;

videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo(), deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);
// 파일전체 export 변수앞에 붙으면 해당 변수만 export
export default videoRouter;