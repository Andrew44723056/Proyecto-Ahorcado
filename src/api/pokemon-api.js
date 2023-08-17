class Pokemon {
  //esta funcion recupera datos de pokeAPI
  async getPokemons() {
    //si no paso un valor a la funcion el valor por defecto es 5
    const idpokemon = Math.floor(Math.random() * (200 - 0), 0);

    const url = `https:pokeapi.co/api/v2/pokemon/${idpokemon}`;

    const response = await fetch(url); //realiza la consulta a la url con fetch
    const pokemons = await response.json(); //procesa la data y la convierte a tipo JSON

    return pokemons;
  }
}
// const pokemons = new pokemon();
// const data = await pokemons.getPokemons()
// console.log("URL imagen=>",data[0]);
// console.log("nombre=>",data[1]);
// // pokemons.getPokemons()//ejecutar funcion getPokemons
export { Pokemon };
