const btnSend = document.getElementById("send");

function validarCorreoElectronico(correo) {
    // Expresión regular para validar el correo electrónico
    var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificar si el correo cumple con el patrón
    if (patron.test(correo)) {
        return true; // El correo es válido
    } else {
        return false; // El correo no es válido
    }
}

btnSend.addEventListener("click", function () {
    emailjs.init("p2fJQpADHS6h1KodU");

    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value,
        phone: document.getElementById("phone").value,
    };

    if (validarCorreoElectronico(params.email_id) === true) {
        emailjs.send("service_1ax0ikf", "template_37bmmp2", params).then(function (res) {
            alert("Email Send ", res)
        });
    }
});
