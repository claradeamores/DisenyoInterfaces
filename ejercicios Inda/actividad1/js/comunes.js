$(document).ready(function(){
    $('#crearCuenta').click(function(){
        $('#iniciarSesion').prop('disabled',false);
        $('#iniciarSesion').css("cursor", "pointer");
        $('.contenedor2').slideToggle();
    });
    $('.email').on("input",function(){
        if ( $(this).val().length > 0 &&
             $('.password').val().length > 0){
                $('#iniciar').prop('disabled',false);    
        }
        else {
            $('#iniciar').prop('disabled',true);    
        }
    });
    $('.password').on("input",function(){
        if ( $(this).val().length > 0 &&
             $('.email').val().length > 0){
                $('#iniciar').prop('disabled',false);    
        }
        else {
            $('#iniciar').prop('disabled',true);    
        }
    });
        
        /*var activar = true;
        $('input').each(function(){
            if ( $(this).val().length < 0 )
                activar = false;
        });
        if (activar)
            $('#iniciar').prop('disabled',false);
        
    });*/
    
    
});