class Result {
  constructor() {
    this.message = "Volver a Empezar";
  }

  showResult(valor) {
    console.log(valor);
    if (valor === true) {
      return (this.message = "Victoria");
    } else {
      return (this.message = "Perdiste");
    }
  }  
}

const App = new Result();

export { Result };
