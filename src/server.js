//Dados da aplicação
const proffys = [
    {
        name: "Viviane Viana",
        avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQHJNep3d3Blzw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=bm3YYJyvrFQo-53AmQDIfhqkinRjuWlKTc1tjX1UAig",
        whatsapp: "858495322154",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "80",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Caio Viana",
        avatar: "https://scontent.ffor4-1.fna.fbcdn.net/v/t1.0-9/14141554_1006151426171710_1287653089075089101_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=NpqSIGQXGl8AX8VN2ey&_nc_ht=scontent.ffor4-1.fna&oh=e2d398758a717c5db72e0d461a26f4ff&oe=5F5098C8",
        whatsapp: "858495322154",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "75",
        weekday: [1],
        time_from: [1220],
        time_to: [1720]
    },
];

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
];

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
];

//Funcionalidades
function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1;
    return subjects[arrayPosition]
};

function pageLanding(req, res){
    return res.render("index.html");
};

function pageStudy(req, res){
    const filters = req.query;
    return res.render("study.html", { proffys , filters, subjects, weekdays });
};

function pageGiveClasses(req, res){
    //Adicionar dados à lista de proffys
    const data = req.query;
    //Se tiver dados, adicionar
    const isNotEmpty = Object.keys(data).length > 0;
    //Se tiver dados, adicionar
    if(isNotEmpty){
        data.subject = getSubject(data.subject);

        proffys.push(data);

        return res.redirect("/study");
    }
    //Se não tiver dados, mostrar a página:
    return res.render("give-classes.html", {subjects, weekdays});
};

//Servidor
const express = require('express');
const server = express();

//Configurar nunjucks (template engine): 
const nunjucks = require('nunjucks'); 
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});

//Início e configuração do servidor
server;
//Configurar arquivos estáticos (css, scripts, imagens):
server.use(express.static("public"))

//Rotas da aplicação:
.get("/", pageLanding) 
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//Start do servidor
.listen(5500)