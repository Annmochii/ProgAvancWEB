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

- https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script

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
    ]
}
```

## Instalando o ts-node-dev

O ts-node-dev nos ajuda a ter mais produtividade uma vez que ele reinicializar o servidor automaticamente a medida que salvamos o projeto.

```
  npm i ts-node-dev --save-dev
```

Depois de instalado, basta atualizar o script de execução do projeto para:

```
  "dev": "npx ts-node-dev ./src/server.ts"
```

## Configurando o Prisma ORM

https://www.prisma.io/docs/getting-started/quickstart

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
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
  post      Post    @relation(fields: [postId], references: [id])
  postId    Int
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

https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods

## Status Codes do HTTP

https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status#respostas_de_erro_do_servidor

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

## Adicionando a confirugação "Format on save"

1. Aperte o botão "F1" no teclado;
2. Digite "Settings";
3. Selecione "Preferences: Open Settings (UI)";
4. Selecione no menu o divisor "Text Editor";
5. Selecione no menu o subdivisor "Formatting";
6. Marque o checkbox que se refere à função "Format on save".
  
## Trabalhando com IA

https://console.groq.com/

Instale a biblioteca Groq JavaScript:

```
  npm install --save groq-sdk
```

