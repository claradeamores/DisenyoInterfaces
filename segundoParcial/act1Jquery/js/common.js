$(document).ready(function () {
    $('#btn-arriba').click(function () {
        //$('#acceso').hide();
        // $('#container-cuenta').show();
        $('#container-cuenta').slideDown();
        $('#acceso').hide();

    })
    // Agregar manejadores de eventos keyup para los campos de entrada 
    $('#correo, #contrasenya').on('keyup', function () {
        // Verificar si ambos campos de entrada tienen valores
        if ($('#correo').val() !== '' && $('#contrasenya').val() !== '') {
            // Habilitar el botón "Iniciar sesión"
            $('#iniciar-sesion').prop('disabled', false);
        } else {
            // Deshabilitar el botón "Iniciar sesión" si algún campo está vacío
            $('#iniciar-sesion').prop('disabled', true);
        }
    });
    $(document).ready(function () {
        $('#btn-abajo').click(function () {
            $('#acceso').fadeOut(function () {
                // Esta función de callback se ejecuta después de completar el desvanecimiento
                $('#container-usuario').fadeIn();
            });
        });
    });


});



