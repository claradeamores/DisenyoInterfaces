
let inicio=()=>{
    $(document).ready(function () {
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            dots: true,
            centerMode: true,
            centerPadding: '0',
            variableWidth: false,
            
        });
    });
    document.getElementById("login").addEventListener("click", abrirPopup);
    
} ;   
function abrirPopup() {
    var popup = document.createElement("div");
    popup.innerHTML="";
    popup.className = "popup";
    var datos = `
        <form>
            <label for="username">Usuario:</label>
            <input type="text" id="username" name="username" required>
            <br>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>
            <br>
            <input type="submit" value="Iniciar sesión">
        </form>
    `;
    popup.innerHTML = datos;
    document.body.appendChild(popup);
    document.getElementById("loginForm").addEventListener("submit",cerrarPopup);
}
function cerrarPopup(e) {
    e.preventDefault();
    var popup = document.querySelector(".popup");
    if (popup) {
        document.body.removeChild(popup);
    }
}
window.addEventListener("DOMContentLoaded", inicio);