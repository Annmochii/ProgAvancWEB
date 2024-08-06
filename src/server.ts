import express, {Request, Response} from 'express';

const app = express ();

app.get('/', function(req: Request, res: Response){
    res.send("Olá mundo")
});

app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
});