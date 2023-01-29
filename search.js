const pokemonCardTemplate = document.querySelector("[data-pokemon-template]");
const pokemonCardsContainer = document.querySelector("[data-pokemon-cards-container]");
const searchInput = document.querySelector("[data-search]");

let pokemonArray = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  pokemonArray.forEach((pokemon) => {
    const isVisible = pokemon.name.toLowerCase().includes(value);
    pokemon.element.classList.toggle("hide", !isVisible);
  });
});

fetch("https://pokeapi.co/api/v2/pokemon?limit=15")
  .then((res) => res.json())
  .then((data) => {
    pokemonArray = data.map(pokemon => {
      const card = pokemonCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const image = card.querySelector("[data-image]");
      header.textContent = pokemon.name;
      image.src = pokemon.image;
      pokemonCardsContainer.append(card);
      return {
        name: pokemon.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        element: card,
      };
    });
  });
