/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* ■■■■■■■■■■■■ CLASE PELICULA  ■■■■■■■■■■■ */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */

class Pelicula {
  constructor(
    id,
    nombre,
    duracion,
    actores,
    urlTrailer,
    puntuacion,
    genero,
    portada,
    meGusta
  ) {
    this._idPelicula = id;
    this._nombre = nombre;
    this._duracion = duracion;
    this._actores = actores;
    this._urlTrailer = urlTrailer;
    this._puntuacion = puntuacion;
    this._genero = genero;
    this._portada = portada;
    this._meGusta = meGusta;
  }

  get IdPelicula() {
    return this._idPelicula;
  }

  set IdPelicula(idPelicula) {
    this._idPelicula = idPelicula;
  }

  get Nombre() {
    return this._nombre;
  }

  set Nombre(nombre) {
    this._nombre = nombre;
  }

  get Duracion() {
    return this._duracion;
  }

  set Duracion(duracion) {
    this._duracion = duracion;
  }

  get Actores() {
    return this._actores;
  }

  set Actores(actores) {
    this._actores = actores;
  }

  get UrlTrailer() {
    return this._urlTrailer;
  }

  set UrlTrailer(urlTrailer) {
    this._urlTrailer = urlTrailer;
  }

  get Puntuacion() {
    return this._puntuacion;
  }

  set Puntuacion(puntuacion) {
    this._puntuacion = puntuacion;
  }

  get Genero() {
    return this._genero;
  }

  set Genero(genero) {
    this._genero = genero;
  }

  get Portada() {
    return this._portada;
  }

  set Portada(portada) {
    this._portada = portada;
  }

  get MeGusta() {
    return this._meGusta;
  }

  set MeGusta(meGusta) {
    this._meGusta = meGusta;
  }

  obtenerInformacion() {
    const film = `<div class="grid-item">
            <div class="card">
                <img src=${this.Portada} alt="foto"/>
                <p>${this.Nombre}</p>
                <p>${this.Duracion}</p>
                <p>${this.Actores}</p>                
                <a href="${this.UrlTrailer}" target="_blank">Trailer</a>
                <p>${this.Puntuacion}</p>        
                <p>${this.Genero}</p>                                         
                <button id=${this.IdPelicula} class="${this.MeGusta}" onclick="agregarBorrarFavoritos(this);">Me gusta</button>
            </div>
          </div>
          `;
    return film;
  }
}
