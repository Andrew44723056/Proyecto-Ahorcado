class Pokemon {
  //esta funcion recupera datos de pokeAPI
  async getPokemons() {
    //si no paso un valor a la funcion el valor por defecto es 5
    const idpokemon = Math.floor(Math.random() * (200 - 1), 0);

    const url = `https:pokeapi.co/api/v2/pokemon/${idpokemon}`;

    const response = await fetch(url); //realiza la consulta a la url con fetch
    const pokemons = await response.json(); //procesa la data y la convierte a tipo JSON

    return pokemons;
  }
}

export { Pokemon };
