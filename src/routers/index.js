const { Router } = require('express');
const router = Router();
const pool= require('../database');
/* router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views/index.hbs'));
    res.render('inicio.hbs',{titulo:'Analytics Dashboard'});
 }); */

/*  router.get('/registro',(req,res)=>{
   // res.sendFile(path.join(__dirname,'views/index.hbs'));
   res.render('login/registro.hbs',{titulo:'Registro'});
});
router.get('/home',(req,res)=>{
   // res.sendFile(path.join(__dirname,'views/index.hbs'));
   res.render('index.hbs',{titulo:'Home'});
});
 router.get('/buttons',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views/index.hbs'));
    res.render('buttons.hbs',{titulo:'buttons'});
 }); */
 module.exports = router;