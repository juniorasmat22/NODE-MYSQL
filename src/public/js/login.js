/* INICIO DE SESIÓN */
const formulario_login=document.querySelector("#form-login");
formulario_login.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formulario_email=document.querySelector("#form_email").value;
    const formulario_password=document.querySelector("#form_password").value;
    /* console.log(formulario_email, formulario_password); */
    auth
    .signInWithEmailAndPassword(formulario_email,formulario_password)
    .then(userCredential=>{
        location.href ="/home";
    }).cath(error=>{
        console.log(error);
    })
})
/* FIN DE INICIO DE SESIÓN */