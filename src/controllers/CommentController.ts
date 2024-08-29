import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CommentController {
    constructor(){

    }

    async listComment(req: Request, res: Response){
        try {
            const comments = await prisma.user.findMany();
  
            res.json(comments)
        }catch(error){
            console.log(error);
            return res.status(500).json({
                error: error
            })
        }
    }
}

export default new CommentController();