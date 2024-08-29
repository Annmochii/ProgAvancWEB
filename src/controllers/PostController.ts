import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PostController {
    constructor(){

    }

    async listPost(req: Request, res: Response){
        try {
            const posts = await prisma.user.findMany();
  
            res.json(posts)
        }catch(error){
            console.log(error);
            return res.status(500).json({
                error: error
            })
        }
    }
}

export default new PostController();