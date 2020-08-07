const express = require('express')
const nunjucks = require('nunjucks')
const server = express();
const { pageLanding, studyPage, giveClassesPage, saveClasses } = require('./pages.js')

//configuração do nunjucks
nunjucks.configure('src/pages', {
    express: server,
    noCache: true,
})

//Configuração dos arquivos estáticos
server.use(express.static("public"))

//receber os dados do req.body
server.use(express.urlencoded({ extended: true }))

//Configuração das ROTAS
server
.get("/", pageLanding)
.get("/study", studyPage)
.get("/give-classes", giveClassesPage)
.post("/save-classes", saveClasses)

// start do server
server.listen(5500)

