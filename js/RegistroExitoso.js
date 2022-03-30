function obtenerDatos() {
    //Accedemos a los valores
    const valores = window.location.search;
    //Creamos la instancia
    const urlParams = new URLSearchParams(valores);

    nom = urlParams.get('Name');
    mail = urlParams.get('Mail');
    asientos = urlParams.get('Asientos');

    var contRegisto = document.getElementById('contRegistro');
    var sHTMLMost = '';

    sHTMLMost += `
        <h1><span>${nom}</span> Tus asientos se reservaron exitosamente!</h1>
        <p>Tus entradas serán enviadas al correo <span>${mail}</span></p>
        <p>Los asientos seleccionados son: <span>${asientos}</span></p>
        <img src="../image/logo.png" alt="">
        <button type="button" onclick="mostrarInicio(); ">Regresar</button>
    `;

    contRegisto.innerHTML = sHTMLMost;
}

function mostrarInicio() {
    window.location.href = 'https://thompsondavila.github.io/index.html';
}