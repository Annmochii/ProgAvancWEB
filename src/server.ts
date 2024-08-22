import express, { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

//Inserir usuários
app.post("/user", async function (req: Request, res: Response) {
  //Inserir um usuário ...
  try {
    const userdata = req.body;

    if (!userdata.email) {
      return res.status(400).json({
        status: 400,
        message: "Você precisa passar o email no corpo da requisição",
      });
    }

    console.log(userdata);
    const newuser = await prisma.user.create({
      data: userdata,
    });

    console.log(newuser);

    res.json({
      status: 200,
      newuser: newuser,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: 500,
      message: error,
    });
  }
});

// Listar usuários
app.get("/users", async function (req: Request, res: Response) {
  const users = await prisma.user.findMany();

  res.json(users);
});

// Atualizar usuários

app.put("/user/:id", async function (req: Request, res: Response) {
  try {
    const id = req.params.id;
    const body = req.body;

    const updatedUser = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: body,
    });

    if (updatedUser) {
      return res.json({
        status: 200,
        updatedUser: updatedUser,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: 500,
      message: error,
    });
  }
});

// Deletar usuários

app.delete("/user/:id", async function (req: Request, res: Response) {
  try {
    const id = req.params.id;

    await prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json({
      status: 200,
      message: "Usuário deletado com sucesso",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Fala ao deletar o registro",
    });
  }
});

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
