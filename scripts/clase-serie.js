

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* ■■■■■■■■■■■■ CLASE SERIE  ■■■■■■■■■■■ */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */



class Serie extends Pelicula {
    constructor(
      nombre,
      duracion,
      actores,
      urlTrailer,    
      puntuacion,
      genero,
      portada,
      idSerie,
      nroTemporadas,
      nroCapitulos
    ) {
      super(
        nombre,
        duracion,
        actores,
        urlTrailer,      
        puntuacion,
        genero,
        portada
      );
      this._idSerie = idSerie;
      this._nroTemporadas = nroTemporadas;
      this._nroCapitulos = nroCapitulos;
    }
  
    get IdSerie() {
      return this._idSerie;
    }
  
    set IdSerie(idSerie) {
      this._idSerie = idSerie;
    }
  
    get NroTemporadas() {
      return this._nroTemporadas;
    }
  
    set NroTemporadas(nroTemporadas) {
      this._nroTemporadas = nroTemporadas;
    }
  
    get NroCapitulos() {
      return this._nroCapitulos;
    }
  
    set NroCapitulos(nroCapitulos) {
      this._nroCapitulos = nroCapitulos;
    }
  
    obtenerInformacion() {
      let infoFilm = super.obtenerInformacion();
      let serie =
          `
          <p>${this.NroTemporadas}</p>
          <p>${this.NroCapitulos}</p>        
          `;
  
      infoFilm += serie;
  
      return infoFilm;
    }
  
    obtenerId() {
      return this.IdSerie;
    }
  }