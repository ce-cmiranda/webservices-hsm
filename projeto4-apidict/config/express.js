const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config/default.json');

module.exports = function () {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.server.port);

  // MIDDLEWARES
  app.use(bodyParser.json());
  require('../api/routes/translate')(app);

  return app;
}