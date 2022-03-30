var asientosSeleccionados = [];

// INICIA FUNCIÓN DE SELECCIÓN DEL BLOQUE DE ASIENTOS IZQUIERDO
function insertAsientosIzquierda() {
    var bloqueIzquierdo = document.getElementById('bloqueIzquierdo');
    var sHTMLMost = '';

    for (var iAs = 1; iAs < 20; iAs++) {
        sHTMLMost += `
            <div class="asiento asBloqueIzq">
                <span class="btnAsiento btnBqIzq" value="${iAs}">${iAs}L</span>
            </div>
        `;
    }

    bloqueIzquierdo.innerHTML = sHTMLMost;
}

$(document).ready(function () {
    var asientoBL = document.querySelectorAll('.asBloqueIzq');

    asientoBL.forEach(function (element, indice) {
        var btnAsientoBL = document.querySelectorAll('.btnBqIzq');
        var arr = [];

        asientoBL[indice].addEventListener('click', () => {
            var asientoSelectL = indice + 1;
            if (arr.includes(indice) === true) {
                mostrar_alerta('El asiento ' + asientoSelectL + '-L' + ' esta ocupado');
                // console.log(indice);
            } else {
                btnAsientoBL[indice].classList.add('red');
                asientoSelectL.toString();
                // console.log(asientoSelectL + 'L');
                // console.log(indice);
                arr.push(indice);
                asientosSeleccionados.push((indice + 1) + 'L');
                console.log(asientosSeleccionados);
                mostrar_alerta('Se reservo el asiento ' + asientoSelectL + '-L', 'success');
                // console.log(arr)
            }
        });
    });
});
// TERMINA FUNCIÓN DE SELECCIÓN DEL BLOQUE DE ASIENTOS IZQUIERDO


// INICIA FUNCIÓN DE SELECCIÓN DEL BLOQUE DE ASIENTOS CENTRAL
function insertAsientosCentro() {
    var bloqueCentral = document.getElementById('bloqueCentral');
    var sHTMLMost = '';

    for (var iAs = 1; iAs < 20; iAs++) {
        sHTMLMost += `
            <div class="asiento asBloqueCent">
                <span class="btnAsiento btnBqCent" value="${iAs}">${iAs}C</span>
            </div>
        `;
    }

    bloqueCentral.innerHTML = sHTMLMost;
}

$(document).ready(function () {
    var asientoBC = document.querySelectorAll('.asBloqueCent');

    asientoBC.forEach(function (element, indice) {
        var btnAsientoBC = document.querySelectorAll('.btnBqCent');
        var arr = [];

        asientoBC[indice].addEventListener('click', () => {
            var asientoSelectC = indice + 1;
            if (arr.includes(indice) === true) {
                mostrar_alerta('El asiento ' + asientoSelectC + '-L' + ' esta ocupado');
                // console.log(indice);
            } else {
                btnAsientoBC[indice].classList.add('red');
                asientoSelectC.toString();
                // console.log(asientoSelectL + 'L');
                // console.log(indice);
                arr.push(indice);
                asientosSeleccionados.push((indice + 1) + 'C');
                console.log(asientosSeleccionados);
                // console.log(arr)
                mostrar_alerta('Se reservo el asiento ' + asientoSelectC + '-C', 'success');
            }
        });
    });
});
// TERMINA FUNCIÓN DE SELECCIÓN DEL BLOQUE DE ASIENTOS CENTRAL


// INICIA FUNCIÓN DE SELECCIÓN DEL BLOQUE DE ASIENTOS DERECHO
function insertAsientosDerecha() {
    var bloqueDerecho = document.getElementById('bloqueDerecho');
    var sHTMLMost = '';

    for (var iAs = 1; iAs < 20; iAs++) {
        sHTMLMost += `
            <div class="asiento asBloqueDer">
                <span class="btnAsiento btnBqDer" value="${iAs}">${iAs}R</span>
            </div>
        `;
    }

    bloqueDerecho.innerHTML = sHTMLMost;
}

$(document).ready(function () {
    var asientoBR = document.querySelectorAll('.asBloqueDer');

    asientoBR.forEach(function (element, indice) {
        var btnAsientoBR = document.querySelectorAll('.btnBqDer');
        var arr = [];

        asientoBR[indice].addEventListener('click', () => {
            var asientoSelectR = indice + 1;
            if (arr.includes(indice) === true) {
                mostrar_alerta('El asiento ' + asientoSelectR + '-R' + ' esta ocupado');
                // console.log(indice);
            } else {
                btnAsientoBR[indice].classList.add('red');
                asientoSelectR.toString();
                // console.log(asientoSelectR + 'R');
                // console.log(indice);
                arr.push(indice);
                asientosSeleccionados.push((indice + 1) + 'R');
                console.log(asientosSeleccionados);
                // console.log(arr)
                mostrar_alerta('Se reservo el asiento ' + asientoSelectR + '-R', 'success');
            }
        });
    });
});
// TERMINA FUNCIÓN DE SELECCIÓN DEL BLOQUE DE ASIENTOS DERECHO

function cancelar() {
    mostrar_alerta('Intenta nuevamente');
    setTimeout(function () {
        asientosSeleccionados = [];
        window.location.href = `https://thompsondavila.github.io/sistema/Asientos.html?Name=${nom}&Mail=${mail}&Asientos=${asientosSeleccionados}`;
    }, 1000);
}


function registroExitoso() {
    mostrar_alerta('Espera un momento...', 'success');
   
    setTimeout(function () {
        window.location.href = `https://thompsondavila.github.io/sistema/RegistroExitoso.html?Name=${nom}&Mail=${mail}&Asientos=${asientosSeleccionados}`;
    }, 1000);
}

var nom;
var mail;

function obtenerDatos() {
    //Accedemos a los valores
    const valores = window.location.search;
    //Creamos la instancia
    const urlParams = new URLSearchParams(valores);

    nom = urlParams.get('Name');
    mail = urlParams.get('Mail');
    console.log(nom, mail);
}