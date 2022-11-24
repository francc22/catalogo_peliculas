/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* ■■■■■■■■■■■■ NAV MENU  ■■■■■■■■■■■ */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */

const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* ■■■■■■■■■■■■ FUNCIONES  ■■■■■■■■■■■ */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */

function obtenerPeliculaPorId(id) {
  for (pelicula of arrayPeliculas)
    if (pelicula.IdPelicula == id) return pelicula;
}

const almacenarEnStorage = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

const quitarDelStorage = (clave) => {
  localStorage.removeItem(clave);
};

const obtenerValor = (clave) => {
  return localStorage.getItem(clave);
};

const obtenerClave = (indice) => {
  return localStorage.key(indice);
};

const actualizarCorazon = () => {
  document.getElementById("favoritos").innerText =
    localStorage.length == 0 ? "" : localStorage.length;
};

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* ■■■■■■■■■■■■ Obteniendo Peliculas desde una API  ■■■■■■■■■■■ */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */

const apiPeliculas = "api/peliculas.json";
let arrayPeliculas = [];

fetch(apiPeliculas)
  .then((response) => response.json())
  .then((peliculas) => {
    peliculas.forEach((pelicula) => {
      const objetoPelicula = new Pelicula(
        pelicula.id,
        pelicula.nombre,
        pelicula.duracion,
        pelicula.actores,
        pelicula.urlTrailer,
        pelicula.puntuacion,
        pelicula.genero,
        pelicula.portada,
        pelicula.meGusta
      );

      arrayPeliculas.push(objetoPelicula);
    });

    /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
    /* ■■■■■■■■■■■■ MOSTRANDO LAS PELICULAS  ■■■■■■■■■■■ */
    /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */

    let divContainer = document.getElementById("grid-container-terror");
    divContainer.innerHTML = "";

    for (pelicula of arrayPeliculas) {
      for (let i = 0; i < localStorage.length; i++) {
        let clave = obtenerClave(i);

        if (pelicula.IdPelicula == clave) {
          let peliFavorita = obtenerValor(clave);
          let objPeliFavorita = JSON.parse(peliFavorita);
          pelicula.MeGusta = objPeliFavorita._meGusta;
        }
      }

      divContainer.innerHTML += pelicula.obtenerInformacion();
      actualizarCorazon();
    }
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("proceso finalizado"));

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* ■■■■■■■■■■■■ AGREGANDO PELICULAS A FAVORITOS  ■■■■■■■■■■■ */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */

function agregarBorrarFavoritos(boton) {
  const objPelicula = obtenerPeliculaPorId(boton.id);

  if (boton.classList.contains("no-me-gusta")) {
    objPelicula.MeGusta = "me-gusta";
    const jsonPelicula = JSON.stringify(objPelicula);
    almacenarEnStorage(boton.id, jsonPelicula);
  } else {
    objPelicula.MeGusta = "no-me-gusta";
    quitarDelStorage(boton.id);
  }

  location.reload();
  actualizarCorazon();  
}

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* ■■■■■■■■■■■■ MOSTRANDO PELICULAS FAVORITAS  ■■■■■■■■■■■ */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */

function mostrarPopupFavoritos() {
  let seccion = document.getElementById("peliculasFavoritas");

  for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    let jsonPelicula = localStorage.getItem(clave);
    let objPelicula = JSON.parse(jsonPelicula);

    let div = document.createElement("div");
    div.innerHTML = `<h3>${objPelicula._nombre}</h3><img src="${objPelicula._portada}"/>`;

    seccion.appendChild(div);
  }
}
