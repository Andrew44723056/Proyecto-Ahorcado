import { Keyboard } from "./Keyboard.js";
import { Panel } from "./Panel.js";

const App = new Keyboard();

const Panels = new Panel();
console.log(Panels);

const vector = App.drawKeyboard();
const palabra = Panels.dibujarLineas();

console.log(palabra);

const container = document.querySelector("#container");

vector.map((key) => {
  const button = document.createElement("button");
  button.textContent = key;
  button.addEventListener("click", (e) => {
    const h1=document.querySelectorAll("#lolo h1");
    lolo.textContent = '';
    console.log(e.target.textContent);
    button.classList = "blue";
    Panels.showCorrect(e.target.textContent);
    
    palabra.map((vectorAdivinanza) => {
      const h1 = document.createElement("h1");
      h1.textContent = vectorAdivinanza;
      h1.addEventListener("click", (e) => {
        console.log(e.target.textContent);
      });
      lolo.appendChild(h1);
    });

    button.classList = "'amarrillo'";
    Panels.showCorrect(e.target.textContent);
  });
  container.appendChild(button);
});

document.addEventListener("DOMcontentLoaded", () => {
  const board = new Keyboard();
  board.drawKeyboard();
});

palabra.map((vectorAdivinanza) => {
    const h1 = document.createElement("h1");
    h1.textContent = vectorAdivinanza;
    h1.addEventListener("click", (e) => {
      console.log(e.target.textContent);
    });
    lolo.appendChild(h1);
  });
