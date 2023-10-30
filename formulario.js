document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("registrar");
    const mensajeError = document.getElementById("mensajeError");
    const telefonoInput = document.getElementById("telefono");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const telefono = telefonoInput.value;
        const email = document.getElementById("email").value;

        // Validar que los campos no estén vacíos
        if (nombre.trim() === "" || apellido.trim() === "" || telefono === "" || email === "") {
            mostrarMensajeError("Por favor, complete todos los campos.");
        } else if (!/^[A-Za-z\s]+$/.test(nombre) || !/^[A-Za-z\s]+$/.test(apellido)) {
            mostrarMensajeError("Nombre y apellido deben contener solo letras");
        } else if (!/^\d+$/.test(telefono)) {
            mostrarMensajeError("El campo de teléfono debe contener solo números.");
        } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
            mostrarMensajeError("El correo electrónico no es válido.");
        } else {
            // Guardar los datos en localStorage
            const usuario = {
                nombre,
                apellido,
                telefono,
                email,
            };

            localStorage.setItem("usuario", JSON.stringify(usuario));
            mostrarMensajeExito("¡Registro exitoso!");

            // Limpiar el formulario
            formulario.reset();
        }
    });

    function mostrarMensajeError(mensaje) {
        mensajeError.textContent = mensaje;
        mensajeError.style.color = "red";
        mensajeError.style.display = "block";
    }

    function mostrarMensajeExito(mensaje) {
        mensajeError.textContent = mensaje;
        mensajeError.style.color = "green";
        mensajeError.style.display = "block";

        // Ocultar el mensaje de éxito después de 3 segundos
        setTimeout(function () {
            mensajeError.style.display = "none";
        }, 3000);
    }

    function esNumero(valor) {
        // Utilizamos una expresión regular para verificar si el valor contiene solo números
        return /^\d+$/.test(valor);
    }

    // Agregar un controlador de eventos al campo de entrada de teléfono para validar en tiempo real
    telefonoInput.addEventListener("input", function () {
        if (!esNumero(telefonoInput.value)) {
            telefonoInput.setCustomValidity("El campo de teléfono debe contener solo números.");
        } else {
            telefonoInput.setCustomValidity(""); // Campo válido
        }
    });
});
