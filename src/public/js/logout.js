const logout=document.querySelector("#logout");
logout.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        location.href ="/";
    }).cath(error=>{
        console.log(error);
    })
})