import { Request, Response} from 'express';
import bcrypt from "bcrypt";
import { PrismaClient} from '@prisma/client'
import { CheckUserPassword } from '../utils/HashPasswords';
import { generateJwToken } from '../utils/JWT';

const prisma = new PrismaClient();
class UserFiltrado{
    id: number = 0;
    name: string="";
    email: string="";

    constructor(name:string, email: string, id: number){
        this.id = id;
        this.email = email;
        this.name = name;
    }
}
class AuthController{
    constructor(){}

    async signin(req: Request, res: Response){
        try{
            const {email, password} = req.body;

            if(!email || !password){
                return res.json({
                    status: 400,
                    message: "Não contém o email ou senha no body"
                })
            }

            const user = await prisma.user.findFirst({
                where: {
                    email
                },
            });

            if(!user){
                return res.json({
                    status: 500, 
                    message: "Email não encontrado"
                })
            }

            const passwordCheck = await CheckUserPassword(password, user.password);

            if(!passwordCheck){
                return res.json({
                    status: 401,
                    message: "Usuário ou senha inválidos!"
                })
            }
            const userFiltrado =new UserFiltrado(user.name??"",user.email,user.id)

            return res.json({
                status: 200,
                message: "logado com sucesso!",
                user: userFiltrado,
                token: await generateJwToken(user)
            })
        }catch(error){
            console.log(error);
            return res.status(500).json({
                error: error
            })
        }
    }
    async signup(){

    }
    async signout(){

    }
}
export default new AuthController;