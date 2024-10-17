# Aula de Programação Avançada para Web

## Lista de comandos usados no projeto

- `npm init -y`
- `npm i typescript`
- `npx tsc --init` (inicializa o typescript na máquina)
- `npm i ts-node`
- `npx tsc`

Para executar

- `npm run dev` (desenvolvimento)
- `npm run build` (execução)

## Código do tsconfic.json

```
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./build",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

## Scripts que estão sendo utilizados no package.json

- `"build": "npx tsc"`
- `"dev": "npx ts-node ./src/server.ts"`

## Configurando um servidor web

- `npm i express`
- `npm i --save-dev @types/express`

## Projeto para usar múltiplas versões do NodeJS na mesma máquina

[![NVM](https://img.shields.io/badge/NVM-0d1117?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script)](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script)

## Algumas extensões do VSCode recomendadas

```
{
    "recommendations": [
        "vscode-icons-team.vscode-icons",
        "esbenp.prettier-vscode",
        "prisma.prisma",
        "Prisma.prisma-insider"
        "rangav.vscode-thunder-client"
        "mikestead.dotenv"
        "qwtel.sqlite-viewer"
    ]
}
```

## Instalando o ts-node-dev

[![TS-NODE-DEV](https://img.shields.io/badge/TS--NODE--DEV-red?style=for-the-badge&logo=npm&logoColor=white&link=https://www.npmjs.com/package/ts-node-dev)](https://www.npmjs.com/package/ts-node-dev)

O ts-node-dev nos ajuda a ter mais produtividade uma vez que ele reinicializar o servidor automaticamente a medida que salvamos o projeto.

```
  npm i ts-node-dev --save-dev
```

Depois de instalado, basta atualizar o script de execução do projeto para:

```
  "dev": "npx ts-node-dev ./src/server.ts"
```

## Configurando o Prisma ORM

[![PrismaORM](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/docs/getting-started/quickstart)

### Instalando o Prisma

Primeiro instale o Prisma CLI como uma dependencia de desenvolvimento com o comando:

```
  npm install prisma --save-dev
```

Depois configure o Prisma ORM com o comando `init`:

```
  npx prisma init --datasource-provider sqlite
```

### Schema de dados

Vamos configurar o Prisma ORM com o seguinte schema de dados

```
generator client {
  provider = "prisma-client-js"
}

model User {
  id       Int       @id @default(autoincrement())
  email    String    @unique
  name     String?
  posts    Post[]
  password String    @default("123456")
  comments Comment[]
}

model Post {
  id        Int       @id @default(autoincrement())
  title     String
  content   String?
  published Boolean   @default(false)
  author    User      @relation(fields: [authorId], references: [id])
  authorId  Int
  comments  Comment[]
}

model Comment {
  id        Int     @id @default(autoincrement())
  title     String
  content   String
  evaluation String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
  post      Post    @relation(fields: [postId], references: [id])
  postId    Int
}

model Session{
  id        Int     @id @default(autoincrement())
  tokken String
  createdAt DateTime @default(now())
  experiationAt DateTime?
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

```

### Criando o banco de dados

```
  npx prisma migrate dev --name init
```

## Métodos do HTTP

[![HTTP Methods](https://img.shields.io/badge/HTTP%20Methods-0e0d13?style=for-the-badge&logo=mdn web docs&logoColor=8cb4ff&link=https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)

## Status Codes do HTTP

[![HTTP Status Codes](https://img.shields.io/badge/HTTP%20Status%20Codes-0e0d13?style=for-the-badge&logo=mdn web docs&logoColor=8cb4ff&link=https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status#respostas_de_erro_do_servidor)](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status#respostas_de_erro_do_servidor)

## Configurando o .env

```
  DATABASE_URL=file:./dev.db
  GROQ_API_KEY=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
```

## Configurando o Prettier

Aperte o botão "F1" no teclado e digite "Prettier" e crie o arquivo de configuração e confirme que ele esteja da seguinte forma:

```
  {
  "tabWidth": 2,
  "useTabs": false,
  "semi": true
}
```

## Adicionando a configuração para formatar ao salvar

1. Aperte o botão "F1" no teclado;
2. Digite "Settings";
3. Selecione "Preferences: Open Settings (UI)";
4. Selecione no menu o divisor "Text Editor";
5. Selecione no menu o subdivisor "Formatting";
6. Marque o checkbox que se refere à função "Format on save".

## Trabalhando com IA

[![GroqCloud](https://img.shields.io/badge/GroqCloud-f55036?style=for-the-badge&logo=groq&logoColor=white&link=https://console.groq.com/playground)](https://console.groq.com/playground)

Instale a biblioteca Groq JavaScript:

```
  npm install --save groq-sdk
```

## Criptografia de senha

[![bcrypt](https://img.shields.io/badge/bcrypt-red?style=for-the-badge&logo=npm&logoColor=white&link=https://www.npmjs.com/package/bcrypt?activeTab=readme)](https://www.npmjs.com/package/bcrypt?activeTab=readme)

Instale a biblioteca que irá criptografar as senhas:

```
  npm i bcrypt
  npm i --save-dev @types/bcrypt
```

## Criar tokens HTTP

[![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-red?style=for-the-badge&logo=npm&logoColor=white&link=https://www.npmjs.com/package/jsonwebtoken)](https://www.npmjs.com/package/jsonwebtoken)

```
  npm install jsonwebtoken
  npm i --save-dev @types/jsonwebtoken
```

## Gerando a private key

[![RSA Key Generator](https://img.shields.io/badge/RSA%20Key%20Generator-343a40?style=for-the-badge&link=https://cryptotools.net/rsagen)](https://cryptotools.net/rsagen)

- Utilize a key lenght de 2048.

## Aula 08/10: Middleware

Middleware é um conceito amplamente utilizado em desenvolvimento de software, especialmente em aplicações web. Ele se refere a um software que atua como intermediário entre diferentes componentes de um sistema, facilitando a comunicação e a interação entre eles.   

### Como o Middleware Atua em um HTTP Request

Quando um cliente (como um navegador) faz uma solicitação HTTP a um servidor, essa solicitação passa por várias etapas antes de chegar ao destino final (geralmente uma função ou um controlador que lida com a lógica do aplicativo). Aqui está uma explicação passo a passo de como o middleware atua nesse processo:

1. **Recepção da Solicitação**: O servidor recebe a solicitação HTTP. Essa solicitação pode incluir informações como o método (GET, POST, etc.), o URL, os cabeçalhos e o corpo da mensagem.  
2. **Encaminhamento ao Middleware**: Antes de processar a solicitação, o servidor pode passar essa solicitação por uma cadeia de middlewares. Cada middleware tem a capacidade de inspecionar, modificar ou até mesmo rejeitar a solicitação.  
3. **Processamento pelo Middleware**:  
   - **Autenticação**: Um middleware pode verificar se o usuário está autenticado. Se não estiver, ele pode responder com um erro ou redirecionar o usuário para uma página de login.  
   - **Validação**: O middleware pode validar os dados da solicitação, como parâmetros de consulta ou corpo da mensagem, garantindo que estejam no formato correto.  
   - **Registro**: Outro middleware pode registrar informações sobre a solicitação, como o tempo que levou para processá-la ou os dados do usuário que a fez.  
   - **Manipulação de Erros**: Um middleware pode interceptar erros que ocorrerem em outros middlewares ou na lógica do controlador, permitindo uma resposta mais amigável ao cliente.  
4. **Encaminhamento à Próxima Etapa**: Após o processamento, o middleware pode optar por passar a solicitação para o próximo middleware na cadeia ou, se for o último, encaminhá-la ao controlador responsável por gerar a resposta final.  
5. **Geração da Resposta**: O controlador processa a solicitação e gera uma resposta HTTP, que pode incluir dados em formatos como JSON ou HTML.  
6. **Processamento de Resposta pelo Middleware**: Antes de enviar a resposta de volta ao cliente, a resposta pode passar por outros middlewares que podem modificar a resposta, adicionar cabeçalhos, etc.  
7. **Retorno ao Cliente**: Finalmente, o servidor envia a resposta de volta ao cliente.

### Exemplo de Uso

Por exemplo, no `UserRoutes.ts`, entre o `UserRouter.get("/users",` e o ` UserController.listUser);` inserimos o middleware  `function(req: Request, res: Response, next: NextFunction){...}` que irá definir quem poderá acessar o método.

Exemplo de Middleware:

```
  function(req: Request, res: Response, next: NextFunction){
    //@ts-ignore
    if(1==2)
    {
        console.log("Passei pelo middleware ...")
        next();
    }
    else
    {
        return res.status(401).json({
            message: "Você não está autorizado!"
        });
    }
}
```

Para deixar o código mais limpo e organizado, podemos passar essas informações para um arquivo `src/middlewares/Middleware.ts`:

```
import { Request, Response, NextFunction } from "express";

class UserMiddleware {
    constructor(){

    }

    async analyseToken(req: Request, res: Response, next: NextFunction){
        const token = req.headers["authorization"];

        if(!token){
            return res.status(401).json({
                message: "Nenhum token identificado"
            });
        }

        next();
    }
}

export default new UserMiddleware();
```

E no `UserRoutes.ts`, substituimos o middleware por: `UserMiddleware.analyseToken`.

Para casa: aprofundar sobre o middleware
