var restify = require('restify');

function respond(req, res, next) {
  res.end('<?xml version="1.0" encoding="UTF-8" ?><nome>Fátima Teobaldo</nome><observacoes><descricao>Se destacou na atividade: Pintar Coelhos</descricao><data>2018-08-02T03:26:10.063Z</data></observacoes><observacoes><descricao>Brincou durante a aula</descricao><data>2018-06-28T06:04:11.562Z</data></observacoes><observacoes><descricao>Brigou durante o intervalo</descricao><data>2018-03-16T02:15:25.473Z</data></observacoes><observacoes><descricao>Chegou atrazado</descricao><data>2018-04-14T21:49:00.150Z</data></observacoes><matricula>437</matricula><perfil><eixo>Concentração</eixo><turma>8.2</turma><aluno>8.4</aluno><serie>3.9</serie></perfil><perfil><eixo>Cordenação Motora</eixo><turma>9.2</turma><aluno>9</aluno><serie>9</serie></perfil><perfil><eixo>Dicção</eixo><turma>4</turma><aluno>4.1</aluno><serie>8.4</serie></perfil><perfil><eixo>Comunicação</eixo><turma>7.2</turma><aluno>5.2</aluno><serie>8.2</serie></perfil><perfil><eixo>Lógica</eixo><turma>8.7</turma><aluno>5.2</aluno><serie>1.8</serie></perfil>');
  next();
}

var server = restify.createServer();
server.get('/example/xml', respond);
server.head('/example/xml', respond);

server.listen(process.env.PORT || 5000, function() {
  console.log('%s listening at %s', server.name, server.url);
});