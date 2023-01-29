document.querySelector("#pokemonName").addEventListener("keydown", function (e) {
  if (e.code === "Enter") getPokemon(e);
});
document.querySelector("#search").addEventListener("click", getPokemon);

function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonBox").innerHTML = `
        <img src="${data.sprites.other["official-artwork"].front_default}"
        alt="${data.name}">

        <div class="pokemonInfo">
            <h1>${data.name.charAt(0).toUpperCase() + name.slice(1)}</h1>
            <p>Weight: ${data.weight}</p>
        </div>`;
    })
    .catch((err) => {
      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}
