$(document).ready(function(){
    console.log('Funciono correctamente!!!');
    $('button.mostrarContenedor').click(function(){
        $('.contenedor').show();
        $(this).hide();
        $('button.ocultarContenedor').show();
    });
    $('.ocultarContenedor').click(function(){
        $('.contenedor').hide();
        $(this).hide();
        $('.mostrarContenedor').show();
    })
   // $('.contenedor').css('border', '2px solid #000');
   $('.contenedor').css({'border': '2px solid #000', 'padding': '2em'});
   console.log($('.contenedor').css('border'));

})