import express from "express";
import routes from "../routes"
import { videoDetail, getEditVideo, postEditVideo, deleteVideo, getUploadVideo, postUploadVideo } from "../Controllers/videoController";
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.videoUpload, onlyPrivate, getUploadVideo);;
videoRouter.post(routes.videoUpload, onlyPrivate, uploadVideo, postUploadVideo);;

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);
// 파일전체 export 변수앞에 붙으면 해당 변수만 export
export default videoRouter;