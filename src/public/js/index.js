/* REGISTRO DE USUARIOS */
const formulario_registro=document.querySelector("#form-registro");
formulario_registro.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formulario_email=document.querySelector("#form_email").value;
    const formulario_password=document.querySelector("#form_password").value;
    /* console.log(formulario_email, formulario_password); */
    auth
    .createUserWithEmailAndPassword(formulario_email,formulario_password)
    .then(userCredential=>{
        console.log("registro exitoso");
    })
})
/* FIN DE REGISTRO DE USUARIO */
