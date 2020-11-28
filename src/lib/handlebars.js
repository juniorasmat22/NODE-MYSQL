const { format }=require('timeago.js');
const Swal = require('sweetalert2')
const helpers={};
helpers.timeago=(timestamp)=>{
    return format(timestamp);
};
helpers.alerta=(mensaje)=>{
    return Swal.fire(mensaje);
};
module.exports=helpers;
