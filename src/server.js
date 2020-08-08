//Servidor
const express = require('express');
const server = express();
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages.js')

//Configurar nunjucks (template engine): 
const nunjucks = require('nunjucks'); 
const { urlencoded } = require('express');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});

//Início e configuração do servidor
server
//Receber os dados do req.body
.use(express.urlencoded({ extended: true }))
//Configurar arquivos estáticos (css, scripts, imagens):
server.use(express.static("public"))

//Rotas da aplicação:
.get("/", pageLanding) 
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start do servidor
.listen(5500)