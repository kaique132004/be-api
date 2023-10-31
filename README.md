# BE-API (BACK-END API)

Um projeto simples para teste de conhecimento com docker, nosql, express e node. Afim de ser utilizado como modelo para api's de futuros projetos nas demais linguagens.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo? <br>
no CMD:

```
docker run --name **nome do container** -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=**nome de usuario** -e MONGO_INITDB_ROOT_PASSWORD=**senha mongo** -d mongo
```
Para parar o container
```
docker stop **nome do container**
```

### 🔧 Instalação

Faça o clone do projeto.

com o cmd aberto na pasta do projeto executar o seguinte:
```
npm i
```

E nao esqueça de configurar as variaveis de ambiente (.env):

```
DB_URI= <- URL do Mongodb
DB_USERNAME= <- Usuario do mongo
DB_PASSWORD= <- senha do mongo
DB_HOST= <- ip de onde o mongo esta hospedado
PORT= <- por padrao 3000 mas pode ser outra porta

```

## ⚙️ Executando o projeto

após a configuração do banco de dados nosql verifique se o database (banco de dados) existe (você pode usar o dataGrid da JetBrins para configurar).
usar o seguinte comando 
```
  npm start
```

### 🔩 Analise os testes de ponta a ponta

para testar a api basta instalar o thunderClient (VSCode) ou o Postman, em ambos na aba body colocar o seguinte:
```
{
    "email": "email@example.com",
    "senha": "example",
    "nome": "example",
    "tel": "+99 99 99999-9999",
    "status": true ou false
}
```
futuramente irei usar a criptografia nas senhas

## 📦 Implantação

pode ser implementado para testes de cadastro de usuario, exclusão (desativar só), atualização e solicitação de serviços (em breve)

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Docker](https://www.docker.com/) - Virtualização de serviços.
* [NoSQL](https://hub.docker.com/_/mongo) - Banco de dados não relacionais.
* [Node.js](https://nodejs.org/en) - Uso para executar projetos de Back-End.

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Kaique Barbosa** - *Trabalho Inicial*
* **Kaique Barbosa** - *Documentação*

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.

---
⌨️ com ❤️ por [Kaique Barbosa](https://github.com/kaique132004) 😊
