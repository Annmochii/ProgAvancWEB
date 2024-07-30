const express = require("express");

const app = express();

app.get("/", function(req, res)
{
    return res.send("Olá pessoal");
})

app.listen(3000, function(req, res)
{
    return res.send("Servidor rodando na porta 3000");
})