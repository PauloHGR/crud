var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('new', { action: '/new' })
});
router.post('/', function(req, res, next){
    const nome = req.body.nome;
    const idade = parseInt(req.body.idade);
    const uf = req.body.uf;
    global.db.insert({nome, idade, uf}, (e,result) => {
        if(e){return console.log(e);}
        res.redirect('/?new=true')
    })
});
module.exports = router;