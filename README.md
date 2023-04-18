## Clonando Repositório 🖥

Após escolher a pasta de destino, abra seu terminal ou gitbash execute:

```bash
git clone https://github.com/AwdreyCandido/clinica-akkav.git
```

#

## Baixando Dependências 👨🏿‍💻


Abra a pasta do projeto com o VS Code. Abra o terminal integrado do VSCode e execute:

```bash
npm install
```

#

## Configurando Acesso ao Banco de Dados 🎲


Dentro da pasta services, no arquivo `db.ts`, está a função de conexão com o banco de dados. Altere os parametros da função de acordo com o seu servidor do MySQL Workbench.

```bash
import mysql from "mysql2/promise";

export async function connectDB() {
  const db: mysql.Connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "clinicas_medicas",
  });

  return db;
}
```

#

## Executando o Script para Popular o Banco de Dados 📄


Dentro do MySQL Workbench, crie um nova janela de query, cole o conteúdo dentro do arquivo `scriptClinica.sql` e execute o arquivo dentro do Workbench.

#

## Iniciando o Aplicativo 💾


Após a instalação das dependências e configuração do banco, no terminal integrado do VSCode execute o comando abaixo para iniciar a aplicação.

```bash
npm run dev
```

Acesse [http://localhost:3000/clinics](http://localhost:3000/clinics) e voilá 👌