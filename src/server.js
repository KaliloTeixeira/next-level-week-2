const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

const express = require('express')
const nunjucks = require('nunjucks')
const server = express();


//configuração do nunjucks
nunjucks.configure('src/pages', {
    express: server,
    noCache: true,
})

//Configuração dos arquivos estáticos
server
.use(express.static("public"))

//Configuração das ROTAS
server
.get("/", pageLanding)
.get("/study", studyPage)
.get("/give-classes", giveClassesPage)
.listen(5500)

//Funcionalidades das Páginas
function pageLanding(req, res) {
    return res.render("home-page.html");
}

function studyPage(req, res) {
    const filters = req.query;
    console.log(filters)


    return res.render("study-page.html", { proffys, filters, subjects, weekdays });
}

function giveClassesPage(req, res) {
    //Receber dados do Formulário e adicionar aos Proffys
    const data = req.query
    const isNotEmpty = Object.keys(data).length != 0
    
    //Se o array do form não estiver vazio, ele cadastra o Prof e redireciona para a página study
    if(isNotEmpty){
        //Alterando o subject de numero para nome usando a funcao
        data.subject = getSubject(data.subject)

        //Adicionando dados no Array de Proffys
        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes-page.html", { subjects, weekdays });
}

//Funcionalidades Gerais

//Função que recebe o número do subject no form e retorna o nome da matéria
function getSubject(subjectNumber){ 
    return subjects[+subjectNumber-1]
}