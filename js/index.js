var ExpRegNombre = /^[A-Z][a-z-ñÑ\s\W]/;
var ExpRegEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/;
var txtName;
var txtMail;

function iniciarSesion() {
    var nombre = document.getElementById('txtNombre').value;
    var correo = document.getElementById('txtCorreo').value;

    console.log(nombre, correo);
    if (!(/^\s*$/.test(nombre))) {
        if (ExpRegNombre.test(nombre)) {
            if (!(/^\s*$/.test(correo))) {
                if (ExpRegEmail.test(correo)) {
                    mostrar_alerta('Espera un momento por favor...', 'success');
                    window.location.href = `https://thompsondavila.github.io/sistema/Asientos.html?Name=${nombre}&Mail=${correo}`;
                } else {
                    mostrar_alerta('El correo electronico ingresado no es valido');
                }
            } else {
                mostrar_alerta('Debes ingresar tu correo electronico');
            }
        } else {
            mostrar_alerta('El nombre que ingresaste no es valido');
        }
    } else {
        mostrar_alerta('Debes ingresar tu nombre');
    }
}