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
  for (pelicula of arrayPeliculasTerror)
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
  
  /* let nroPeliculasFavoritas = localStorage.length;

  nroPeliculasFavoritas == 0 ?
     document.getElementById('favoritos').innerText = "" : 
     document.getElementById('favoritos').innerText = nroPeliculasFavoritas; */

  
  document.getElementById('favoritos').innerText = localStorage.length == 0 ? "" : localStorage.length;
};


/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* ■■■■■■■■■■■■ Creando objetos del tipo Pelicula  ■■■■■■■■■■■ */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */


const laHuerfana = new Pelicula(
  1,
  "La huerfana",
  "1:39",
  "Isabelle Fuhrman",
  "https://www.youtube.com/watch?v=g-vFIfWDrv0",
  7,
  "terror",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eed4qNf174pcT65it1PBbaTTL3x.jpg",
  "no-me-gusta"
);

const laAbuela = new Pelicula(
  2,
  "La abuela",
  "1:41",
  "Vera Valdez",
  "https://www.youtube.com/watch?v=NE6YrUzcKeA",
  5.9,
  "terror",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iWPCNUkSaSFNMu1Gf2slJlWZqe3.jpg",
  "no-me-gusta"
);

const sonrie = new Pelicula(
  3,
  "Sonrie",
  "1:55",
  "Sosie Bacon",
  "https://www.youtube.com/watch?v=a-JrjnT_678",
  6.7,
  "terror",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aw05OSgJFxsMiLAN0UQG2gCdTGY.jpg",
  "no-me-gusta"
);

const enLaTormenta = new Pelicula(
  4,
  "En la tormenta",
  "1:35",
  "Havana Rose Liu",
  "https://www.youtube.com/watch?v=2cOJZikhFig",
  7,
  "terror",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6bis845x7oW3yz0OqgA9cf2JnPf.jpg",
  "no-me-gusta"
);

const noRespires = new Pelicula(
  5,
  "No respires",
  "1:28",
  "Stephen Lang",
  "https://www.youtube.com/watch?v=mvEetUDCKxE",
  7.3,
  "terror",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3A5sAyP9iENTRL5X86FUeYmo0wZ.jpg",
  "no-me-gusta"
);

const it = new Pelicula(
  6,
  "It",
  "1:30",
  "Tim Curry",
  "https://www.youtube.com/watch?v=_oBZ_zTz0Nw",
  6.9,
  "terror",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uuTYA9LIlIRCFMgFlxWb1KznfEx.jpg",
  "no-me-gusta"
);

const laMasacreDeTexas = new Pelicula(
  7,
  "La masacre de Texas",
  "1:23",
  "Sarah Yarkin",
  "https://www.youtube.com/watch?v=jMCi--w7t1k",
  5.3,
  "terror",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2VnuxwgdMBEgVO7VKvkW6nmYfaM.jpg",
  "no-me-gusta"
);

const encerrada = new Pelicula(
  8,
  "Encerrada",
  "1:29",
  "Rainey Qualley",
  "https://www.youtube.com/watch?v=kD8WvNEcZGw",
  7.1,
  "terror",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xKZ1x7btQDBxvt5JRBOxWjCHMXy.jpg",
  "no-me-gusta"
);

const elConjuro = new Pelicula(
  9,
  "El conjuro",
  "1:45",
  "Vera Farmiga",
  "https://www.youtube.com/watch?v=oUyHULb7xDI",
  7.5,
  "terror",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
  "no-me-gusta"
);

const arrayPeliculasTerror = [
  laHuerfana,
  laAbuela,
  sonrie,
  enLaTormenta,
  noRespires,
  it,
  laMasacreDeTexas,
  encerrada,
  elConjuro,
];

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* ■■■■■■■■■■■■ MOSTRANDO PELICULAS DE TERROR EN HTML  ■■■■■■■■■■■ */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */

let divContainer = document.getElementById("grid-container-terror");
divContainer.innerHTML = "";

for (pelicula of arrayPeliculasTerror) {
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

  actualizarCorazon();
  location.reload();
}


/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* ■■■■■■■■■■■■ MOSTRANDO PELICULAS FAVORITAS  ■■■■■■■■■■■ */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */


function mostrarPopupFavoritos(){
  
  let seccion = document.getElementById('peliculasFavoritas');

  for(let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    let jsonPelicula = localStorage.getItem(clave);
    let objPelicula = JSON.parse(jsonPelicula);
    
    let div = document.createElement('div');        
    div.innerHTML = `<h3>${objPelicula._nombre}</h3><img src="${objPelicula._portada}"/>`;
    

    seccion.appendChild(div);
  }
}