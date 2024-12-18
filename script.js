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
    <h2 class="font-bold">${pokemon.name}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="w-24 h-24 mx-auto mb-4">
    <p>Type: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
    <p>Abilities: ${pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
    <p>Height: ${pokemon.height / 10} m</p>
    <p>Weight: ${pokemon.weight / 10} kg</p>
    <p>Base Stats:</p>
    <ul>
      ${pokemon.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
    </ul>`;
}
document.getElementById('Search').addEventListener('submit', function(event) {
  event.preventDefault();
  const query = document.getElementById('pokemonName').value.trim();
  if (query) {
    fetchPokemon(query);
  }
});


  