import { Router } from "express";

import PostController from "../controllers/PostController";

const PostRouter = Router();

//Listar posts
PostRouter.get("/posts", PostController.listPost);


export default PostRouter;