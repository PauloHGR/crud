var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('new', {title:'Cadastro de Cliente', docs:{}, action: '/new'})
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

router.get('/edit/:id', function(req, res, next){
    var id = req.params.id;
    global.db.findOne(id, (e, docs) => {
        if(e){return console.log(e);}
        res.render('new', {title:'Edição de Cliente', docs:docs, action:'/new/edit/' + docs._id})
    });
})

router.post('/edit/:id', function(req, res, next){
    const id = req.params.id;
    const nome = req.body.nome;
    const idade = parseInt(req.body.idade);
    const uf = req.body.uf;
    global.db.update(id, {nome, idade, uf}, (e, result) => {
        if(e) {return console.log(e);}
        res.redirect('/?edit=true');
    });
})

module.exports = router;