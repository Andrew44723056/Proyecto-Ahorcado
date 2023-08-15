
class Panel {
    constructor() {
      this.palabras = ["avion", "javascript", "cocobolo", "australia", "africa", "jupiter", "luna"];
      this.intentos = 7;
  
    }
let idpalabra = 0;

idpalabra = Math.floor(Math.random() * (this.palabras.length - 0) + 0);

this.palabraElejida = this.palabras[idpalabra];

console.log(this.palabraElejida);

this.vectorRespuesta = Array.from(this.palabraElejida);

for (let index = 0; index < this.palabraElejida.length; index++) {
  this.vectorAdivinanza.push("_");
}
return this.vectorAdivinanza;

if (verifica) {
    button.classList = "blue";
  } 

  const verifica = Panels.showCorrect2(e.target.textContent, conta);
