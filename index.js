var restify = require('restify');
var js2xmlparser = require("js2xmlparser");

const object = {
  nome: "Fátima Teobaldo",
  observacoes: [{
    descricao: "Se destacou na atividade: Pintar Coelhos",
    data: "2018-08-02T03:26:10.063Z"
  }, {
    descricao: "Brincou durante a aula",
    data: "2018-06-28T06:04:11.562Z"
  }, {
    descricao: "Brigou durante o intervalo",
    data: "2018-03-16T02:15:25.473Z"
  }, {
    descricao: "Chegou atrazado",
    data: "2018-04-14T21:49:00.150Z"
  }],
  matricula: 437,
  perfil: [{
    eixo: "Concentração",
    turma: 8.2,
    aluno: 8.4,
    serie: 3.9
  }, {
    eixo: "Cordenação Motora",
    turma: 9.2,
    aluno: 9,
    serie: 9
  },{
    eixo: "Dicção",
    turma: 4,
    aluno: 4.1,
    serie: 8.4
  }, {
    eixo: "Comunicação",
    turma: 7.2,
    aluno: 5.2,
    serie: 8.2
  }, {
    eixo: "Lógica",
    turma: 8.7,
    aluno: 5.2,
    serie: 1.8
  }]
}

function respond(req, res, next) {
  res.end(js2xmlparser.parse("person", object));
  next();
}

var server = restify.createServer();
server.get('/example/xml', respond);
server.head('/example/xml', respond);

server.listen(process.env.PORT || 5000, function() {
  console.log('%s listening at %s', server.name, server.url);
});