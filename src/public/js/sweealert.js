const Swal = require('sweetalert2');
function alerta_eliminar(UserId) {
    Swal.fire({
        title: 'Estas seguro de eliminar el registro?',
        text: "No podras revertir esto!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminarlo!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
}
module.exports=Swal;