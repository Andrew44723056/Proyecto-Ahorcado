class Panel {
  constructor() {
    this.palabras = ["avion", "javascript", "cocobolo", "australia", "africa", "jupiter", "luna"];
    this.vectorAdivinanza = [];
    this.palabraElegida = "";
    this.vectorRespuesta = [];
  }

  dibujarLineas() {
    let idpalabra = 0;

    idpalabra = Math.floor(Math.random() * (this.palabras.length - 0) + 0);

    this.palabraElejida = this.palabras[idpalabra];

    console.log(this.palabraElejida);

    this.vectorRespuesta = Array.from(this.palabraElejida);

    for (let index = 0; index < this.palabraElejida.length; index++) {
      this.vectorAdivinanza.push("_");
    }
    return this.vectorAdivinanza;
  }
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

    for (let index = indexs; index < this.vectorRespuesta.length; index++) {
      if (
        this.vectorRespuesta[index] == letter ||
        this.vectorRespuesta[index] == letraMinuscula
      ) {
        return true;
      }
    }
  }
}
export { Panel };
