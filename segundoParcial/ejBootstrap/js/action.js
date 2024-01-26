let verReceta = (id, url, nombre, categoria) => {
    let tarta = document.getElementById(id);
    tarta.innerHTML = "";
    tarta.innerHTML =
        '<iframe src="'+url+ 'title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    restoDiv =
        '<div class="card-body"><p class="card-title fw-bold">'+nombre+'</p></p></form><p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><p><span class="fst-italic">Categoria:</span> '+categoria+'<form><p class="clasificacion"><input id="radio1" type="radio" name="estrellas" value="5"><label for="radio1">★</label><input id="radio2" type="radio" name="estrellas" value="4"><label for="radio2">★</label><input id="radio3" type="radio" name="estrellas" value="3"><label for="radio3">★</label><input id="radio4" type="radio" name="estrellas" value="2"><label for="radio4">★</label><input id="radio5" type="radio" name="estrellas" value="1"><label for="radio5">★</label></div>';
    tarta.innerHTML += restoDiv;
};




