import { Keyboard } from "./Keyboard.js";
import { BodyParts } from "./BodyParts.js";
import { Panel } from "./Panel.js";

const App = new Keyboard();

const Panels = new Panel();

const Body = new BodyParts();

const vector = App.drawKeyboard();
const palabra = Panels.dibujarLineas();

let conta = 0;
let conta2 = 1;
let attemps = 7;

console.log(palabra);

const container = document.querySelector("#container");
const parts = document.getElementById("lili");

const black = document.getElementById("black");

vector.map((key) => {
  const button = document.createElement("button");
  button.textContent = key;
  button.addEventListener("click", (e) => {
    const h1 = document.querySelectorAll("#lolo h1");
    lolo.textContent = "";

    const verifica = Panels.showCorrect2(e.target.textContent, conta);

    console.log(verifica);

    if (verifica) {
      button.classList = "blue";
    } 
     else {
      button.classList = "amarillo";
      parts.src = Body.nextimage(conta2);
      
      if (conta2 < 7) {
        conta2++;
      }

      if (attemps > 0) {
        attemps--;
        
      }
      
      black.textContent = attemps;
      if (attemps == 0){
        parts.src = Body.nextimage(6);
      }
    }

    console.log(Panels.showCorrect(e.target.textContent));
    lolo.textContent = "";
    console.log(e.target.textContent);
    console.log(Panels.showCorrect(e.target.textContent));

    palabra.map((vectorAdivinanza) => {
      const h1 = document.createElement("h1");
      h1.textContent = vectorAdivinanza;
      h1.addEventListener("click", (e) => {
        console.log(e.target.textContent);
      });

      lolo.appendChild(h1);
    });
  });

  container.appendChild(button);
});

// document.addEventListener("DOMcontentLoaded", () => {
//   const board = new Keyboard();
//   board.drawKeyboard();
// });

palabra.map((vectorAdivinanza) => {
  const h1 = document.createElement("h1");
  h1.textContent = vectorAdivinanza;
  h1.addEventListener("click", (e) => {
    console.log(e.target.textContent);
  });

  lolo.appendChild(h1);
});
