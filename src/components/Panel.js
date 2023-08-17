class Panel {
  constructor() {
    this.palabras = [
      "avion",
      "javascript",
      "cocobolo",
      "australia",
      "africa",
      "jupiter",
      "luna",
    ];
    this.vectorAdivinanza = [];
    this.palabraElegida = "";
    this.vectorRespuesta = [];
  }

  dibujarPokemon(nombre) {
    return (this.vectorRespuesta = Array.from(nombre));
  }

  dibujarLineas() {
    // let idpalabra = 0;

    // idpalabra = Math.floor(Math.random() * (this.palabras.length - 0) + 0);

    // this.palabraElejida = this.palabras[idpalabra];

    // console.log(this.palabraElejida);

    // this.vectorRespuesta = Array.from(nombre);
    for (let index = 0; index < this.vectorRespuesta.length; index++) {
      this.vectorRespuesta.push("_");
    }
    return this.vectorAdivinanza;
  }
  //
  // dibujarLineasModificar() {
  //   let idpalabra = 0;

  //   idpalabra = Math.floor(Math.random() * 200);

  //   this.palabraElejida = this.palabras[idpalabra];

  //   console.log(this.palabraElejida);

  //   this.vectorRespuesta = Array.from(this.palabraElejida);

  //   for (let index = 0; index < this.palabraElejida.length; index++) {
  //     this.vectorAdivinanza.push("_");
  //   }
  //   return this.vectorAdivinanza;
  // }
  showCorrect(letter) {
    const letraMinuscula = letter.toLowerCase();
    this.vectorRespuesta.map((letra, posicion) => {
      if (letra == letter || letra == letraMinuscula) {
        this.vectorAdivinanza[posicion] = letter;
      } else {
        console.log("Incorrecta");
      }
    });

    console.log(this.vectorAdivinanza);
  }

  showCorrect2(letter, indexs) {
    const letraMinuscula = letter.toLowerCase();
    console.log(letter, indexs, this.vectorRespuesta);
    for (let index = indexs; index < this.vectorRespuesta.length; index++) {
      if (
        this.vectorRespuesta[index] == letter ||
        this.vectorRespuesta[index] == letraMinuscula
      ) {
        return true;
      }
    }
  }

  showifisWin() {
    let variable =
      JSON.stringify(this.vectorAdivinanza) ===
      JSON.stringify(this.vectorRespuesta);
    //PALABRA ELEGIDA == VECTOR DE RESPUESTA
    if (variable === true) {
      return true;
    } else {
      return false;
    }
  }
}
export { Panel };
