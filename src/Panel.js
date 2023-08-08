class Panel{
    constructor(){
        this.palabras = ['avion', 'javascript', 'cocobolo', 'australia'];
        this.vectorAdivinanza = []
        this.vectorB = []
        this.palabraElegida
    }

 dibujarLineas(){ 

    let idpalabra = 0

    idpalabra = Math.floor(Math.random() * (this.palabras.length - 0) + 0)

    const palabraElejida = this.palabras[idpalabra];

    console.log(palabraElejida);

    for (let index = 0; index < palabraElejida.length; index++) {
        this.vectorAdivinanza.push('_')
        
    }
    return this.vectorAdivinanza;
 }
 showCorrect(letter) {
    if (letter == true) {
      return (this.Keys = "Correcta");
    } else {
      return (this.Keys = "Incorreta");
    }
  }

 
}
export {Panel}