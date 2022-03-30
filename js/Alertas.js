/**
 * Script que controla las alertas
Brandon Dávila
 * 01092021
 */

/**
 * 
 * @param {*} string alerta cadena de la alerta
 * @param {*} tipo tipo de alerta :  success, danger, warning, info
 *
 */
function mostrar_alerta(string, tipo){
    var system_alerts = document.getElementById("system_alerts");
    var alert = document.createElement("div");
    var time = document.createElement("span");
    time.classList.add('time');
    alert.setAttribute("role", "alert");
    switch (tipo) {
        case "danger":
            alert.classList.add("alert", "system-alert", "danger", "fadeInRight", "t05s");
            alert.innerHTML = `<button type="button" class="close" aria-label="Close" onclick="cerrar_alerta(this);">
                              X
                          </button>
                          <button type="button" class="copy" onclick="copiar_alerta(this);" data-toggle="tooltip" data-placement="top" title="Copiar">
                              <i class="fas fa-exclamation-triangle"></i>
                          </button>
                        <p>
                            <span class='atext'>${string}<textarea>${string}</textarea></span>
                        </p>`;
            break;
        case "success":
            alert.classList.add("alert", "system-alert", "success", "fadeInRight", "t05s");
            alert.innerHTML = `<button type="button" class="close" aria-label="Close" onclick="cerrar_alerta(this);">
                             X
                         </button>
                         <button type="button" class="copy" onclick="copiar_alerta(this);" data-toggle="tooltip" data-placement="top" title="Copiar">
                                <i class="fas fa-check"></i>
                            </button>
                         <p>
                            <span class='atext'>${string}<textarea>${string}</textarea></span>
                        </p>`;
            break;
        case "info":
            alert.classList.add("alert", "system-alert", "info", "fadeInRight", "t05s");
            alert.innerHTML = `<button type="button" class="close" aria-label="Close" onclick="cerrar_alerta(this);">
                                X
                            </button>
                            <button type="button" class="copy" onclick="copiar_alerta(this);" data-toggle="tooltip" data-placement="top" title="Copiar">
                                <i class="fas fa-info-circle"></i>
                            </button>
                            <p>
                                <span class='atext'>${string}<textarea>${string}</textarea></span>
                            </p>`;
            break;
        case "warning":
            alert.classList.add("alert", "system-alert", "warning", "fadeInRight", "t05s");
            alert.innerHTML = `<button type="button" class="close" aria-label="Close" onclick="cerrar_alerta(this);">
                                    X
                                </button>
                                <button type="button" class="copy" onclick="copiar_alerta(this);" data-toggle="tooltip" data-placement="top" title="Copiar">
                                    <i class="fas fa-radiation mx-2"></i>
                                </button>
                                <p>
                                    <span class='atext'>${string}<textarea>${string}</textarea></span>
                                </p>`;
            break;
        default:
            alert.classList.add("alert", "system-alert", "danger", "fadeInRight", "t05s");
            alert.innerHTML = `<button type="button" class="close" aria-label="Close" onclick="cerrar_alerta(this);">
                              X
                          </button>
                          <button type="button" class="copy" onclick="copiar_alerta(this);" data-toggle="tooltip" data-placement="top" title="Copiar">
                              <i class="fas fa-exclamation-triangle"></i>
                          </button>
                        <p>
                            <span class='atext'>${string}<textarea>${string}</textarea></span>
                        </p>`;
            break;
    }
    alert.appendChild(time);
    system_alerts.appendChild(alert);
    time.addEventListener("animationend", function(){
        alert.remove();
    });
}

function cerrar_alerta(closealert) {
    var alertweb = closealert.parentElement;
    alertweb.classList.add("fadeOutRight", "t05s");
    setTimeout(() => {
        alertweb.classList.remove("fadeOutRight", 't05s');
        alertweb.remove();
    }, 500);
}

function copiar_alerta(copyalert) {
    var alert = copyalert.parentElement;
    var input = alert.querySelector('textarea');
    var atext = alert.querySelector('.atext');
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    atext.classList.add('bounce')
    setTimeout(() => {
        atext.classList.remove('bounce');
    }, 0);
}



