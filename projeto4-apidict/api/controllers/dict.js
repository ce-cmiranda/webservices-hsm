module.exports = function () {
    const dictWordsDB = require('../data/dict-words.json');
    const controller = {};
  
    controller.listDictWords = (req, res) => {
      console.log(req.params);
      word = req.params["word"]
      idiom = req.params["idiom"].toLowerCase();
      if (dictWordsDB[word]){
        if (dictWordsDB[word][idiom]){
          translation = dictWordsDB[word][idiom]
        }
        else{
          translation = "Idioma não encontrado"
        }
      }
      else{
        translation = "Palavra não cadastrada"
      }
      return res.status(200).json(translation);
    }
  
    return controller;
  }