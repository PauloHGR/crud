var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  global.db.findAll((e,docs) => {
    if(e) {return console.log(e);}
    res.render('index', { title: 'Listagem de Clientes', docs});
  })
});

router.get('/delete/:id', function(req, res, next){
  const id = req.params.id;
  global.db.deleteOne(id, (e, result) => {
    if(e){return console.log(e);}
    res.redirect('/?delete=true');
  });
})

module.exports = router;
