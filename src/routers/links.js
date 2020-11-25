const { Router } = require('express');
const router = Router();
const pool= require('../database');
 router.get('/index',(req,res)=>{
    res.render('prueba/index.hbs',{titulo:'Analytics Dashboard'});
 });
module.exports = router;