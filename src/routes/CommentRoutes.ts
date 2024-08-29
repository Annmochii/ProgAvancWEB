import { Router } from "express";

import CommentController from "../controllers/CommentController";

const CommentRouter = Router();

//Listar comentários
CommentRouter.get("/comments", CommentController.listComment);


export default CommentRouter;