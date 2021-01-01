module.exports = app => {
    const controller = require('../controllers/dict')();
  
    app.route('/api/v1/translate/:word/:idiom')
      .get(controller.listDictWords);
  }