class Keyboard {
  constructor() {
    this.Keys = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "j",
      "i",
      "k",
      "l",
      "ñ",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
  }
  drawKeyboard() {
    return this.Keys
  }
  // showCorrect(letter) {
  //   if (letter == true) {
  //     return (this.Keys = "Correcta");
  //   } else {
  //     return (this.Keys = "Incorreta");
  //   }
  // }
}

export {Keyboard};
