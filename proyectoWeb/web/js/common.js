$(document).ready(function () {
    $('button.politica').on('click', function () {
        $('.cookies').slideUp("slow", function () {
            $('.modalCookies').fadeIn();
            $('body').css({
                'overflow': 'hidden',
                'height': '100%',
                'background': 'rgba(0,0,0,0.75)'
            });
        });
    });

    $('button.aceptar').on('click', function () {
        $('.cookies').slideUp("slow");
    });

    $('.aceptarModal, .cerrarModal').on('click', function () { // Agregado .cerrarModal
        $('.modalCookies').fadeOut(function () {
            $('body').css({
                'background': '#fdfcef',
                'overflow': 'unset',
                'height': 'auto'
            });
        });
    });

    $('a.politica-footer').on('click', function () {
        $('.cookies').slideUp("slow", function () {
            $('.modalCookies').fadeIn();
            $('body').css({
                'overflow': 'hidden',
                'height': '100%',
                'background': 'rgba(0,0,0,0.75)'
            });
        });
    });

    $('a.politica-privacidad').on('click', function () {
        $('.cookies').slideUp("slow", function () {
            $('.modalPrivacidad').fadeIn();
            $('body').css({
                'overflow': 'hidden',
                'height': '100%',
                'background': 'rgba(0,0,0,0.75)'
            });
        });
    });
    $('button.aceptarPrivacidad').on('click', function () {
        $('.modalPrivacidad').fadeOut();
        $('body').css({
            'background': 'transparent',
            'overflow': 'unset',
            'height': 'auto'
        });
    })
    $('.logo').on('click', function () {
        window.location.href = "index.html";
    })
});
let verReceta = (id, url, nombre) => {
    let tarta = document.getElementById(id);
    tarta.innerHTML = "";
    tarta.innerHTML =
        '<iframe src="' + url + 'title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    restoDiv =
        '<div class="card-body"><p class="card-title fw-bold"><span class="rojo-section">' + nombre + '</span></p></p></form><p class="card-text fst-italic">Pasos: <ol><li>Preparamos el molde y precalentamos el horno a 200 ºC con calor arriba y abajo</li><li>Mezclamos las galletas y la mantequilla</li><li>Colocamos las galletas por la base y las paredes del molde, reservamos en la nevera</li><li>Mezclamos el queso y la nata</li></ol></div>';
    tarta.innerHTML += restoDiv;
};
