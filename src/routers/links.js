const { Router } = require('express');
const router = Router();
const pool= require('../database');
 router.get('/',async (req,res)=>{
   const usuarios= await pool.query("Select * from Usuarios");

    res.render('prueba/index.hbs',{usuarios});
 });
router.post('/add',async (req,res)=>{
   const {email, contra}=req.body;
   const newUser={
      UserName:email,
      UserPassword:contra,
      UserEstado:1

   }
   await pool.query("Insert into usuarios set ?",[newUser])
   res.redirect('/links');
});
router.get("/delete/:id",async (req, res)=>{
   const {id}=req.params;
   await pool.query('DELETE FROM usuarios WHERE UserId=?',[id]);
   res.redirect('/links');
});
router.get("/edit/:id", async (req, res)=>{
   const {id}= req.params;
   const usuarios=await pool.query("SELECT * FROM usuarios WHERE UserId=?",[id]);
   res.render('prueba/edit.hbs',{usuario:usuarios[0]});
});
router.post("/edit/:id", async (req, res)=>{
   const {id}= req.params;
   const {email, contra,estado}=req.body;
   
   const newUser={
      UserName:email,
      UserPassword:contra,
      UserModify_at: new Date(),
      UserEstado:estado
   }
   console.log(newUser,id);
   await pool.query("UPDATE usuarios set ? WHERE UserId=?",[newUser,id]);
   res.redirect('/links/index');
});
router.get("login",(req, res)=>{
   res.render('login/login.hbs');
});
module.exports = router;