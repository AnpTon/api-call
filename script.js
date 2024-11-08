const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
async function fetchPokemon(query) {
  try {
    const response = await fetch(`${apiUrl}${query.toLowerCase()}`);
    if (!response.ok) {
      throw new Error('Pokémon not found');
    }
    const pokemon = await response.json();
    displayPokemon(pokemon);
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('pokemonInfo').innerText = 'Pokémon not found.';
  }
}
function displayPokemon(pokemon) {
  const pokemonInfoElement = document.getElementById('pokemonInfo');
  pokemonInfoElement.innerHTML = `
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" style="width:150px;height:150px;">
    <p>Type: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
    <p>Abilities: ${pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>`;
}
document.getElementById('Search').addEventListener('submit', function(event) {
  event.preventDefault();
  const query = document.getElementById('pokemonName').value.trim();
  if (query) {
    fetchPokemon(query);
  }
});


  