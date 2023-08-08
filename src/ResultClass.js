class Result {
  constructor() {
    this.message = "Volver a Empezar";
  }

  showResult(valor) {
    if (valor == true) {
      return (this.message = "Victoria");
    } else {
      return (this.message = "Perdiste");
    }
  }
}

const App = new Result();
console.log(App.message);
console.log(App.showResult(true));
console.log(App.showResult(false));
