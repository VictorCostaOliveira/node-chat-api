# Simple Chat API in Node JS

- Dependências
  - Node Js 
        - https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04 
  - Mongo DB
        - [Ubunut] https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
        - [MacOs] https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
  - Redis
        - [Ubuntu] https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-redis-on-ubuntu-16-04
        - [MacOs] https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298

> Clone o repositorio
`git clone git@github.com:VictorCostaOliveira/node-chat-api.git`

> Entre no projeto

```bash
$ cd node-chat-api
```

> `npm install` para instalar os libs do projeto;

> Start do servidor:
`npm run dev`

> Aplicação estara rodando na porta 5000;

> `/chats` Para pegar todas as mensagens ;

Uma mensagem terá:
```JSON
{
    handle: "String",
    message: "String",
    created: Date()
}
```