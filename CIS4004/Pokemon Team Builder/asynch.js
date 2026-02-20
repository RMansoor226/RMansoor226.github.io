localStorage.clear();
const pokemonNameOrID = document.getElementById("lookup");

function checkIfCached(pokemon) {
    const cached = JSON.parse(localStorage.getItem(pokemon));
    if (cached) {
        console.log("Loaded from cache");
        return cached;
    }
    return null;
}

function changePokemonInfo(data) {
    // Change image
    document.getElementById("pokemonSprite").src = data.sprites.front_default;
    document.getElementById("pokemonSprite").alt = "Image of " + data.name;

    // Change sound bite
    document.getElementById("pokemonCry").src = data.cries.latest;

    // Change dropdown options for Pokemon moveset
    let moveset = data.moves;
    for (let i = 0; i < moveset.length; i++) {
        let move = document.createElement("option");
        move.value = data.moves[i].move.name;
        move.textContent = data.moves[i].move.name;

        document.getElementById("firstAbility").appendChild(move.cloneNode(true));
        document.getElementById("secondAbility").appendChild(move.cloneNode(true));
        document.getElementById("thirdAbility").appendChild(move.cloneNode(true));
        document.getElementById("fourthAbility").appendChild(move.cloneNode(true));
    }
}

async function lookupPokemon() {
    let pokemon = pokemonNameOrID.value;

    let cachedResult = checkIfCached(pokemon);
    console.log(cachedResult);

    if (cachedResult) {
        changePokemonInfo(cachedResult);
    }   else {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon);

        // Throw error if an improper fetch request was made
        if (!response.ok) {
            console.error("HTTP error: " + response.status);
            return null;
        }

        const data = await response.json();

        console.log("Loaded from API");

        localStorage.setItem(pokemon, JSON.stringify(data));

        changePokemonInfo(data);
    }

    console.log("Request is fulfilled for " + pokemon);
}

function addToTeam() {
    // Retrieve selected pokemon
    let addedPokemon = checkIfCached(pokemonNameOrID.value)

    // Create Pokemon's new image element
    const newTeamMemberImage = document.createElement("img");
    newTeamMemberImage.src = addedPokemon.sprites.front_default;
    newTeamMemberImage.alt = "Image of " + addedPokemon.name;

    // Create Pokemon's moveset list
    const newTeamMemberMoveset = document.createElement("ul");
    let moveDropdowns = ["firstAbility", "secondAbility", "thirdAbility", "fourthAbility"];

    for (let i = 0; i < moveDropdowns.length; i++) {
        let move = document.createElement("li");
        move.textContent = document.getElementById(moveDropdowns[i]).value;
        newTeamMemberMoveset.appendChild(move);
    }

    // Create Pokemon team entry
    const newTeamMemberSlot = document.createElement("section");
    newTeamMemberSlot.appendChild(newTeamMemberImage);
    newTeamMemberSlot.appendChild(newTeamMemberMoveset);
    newTeamMemberSlot.classList.add("teamMember");

    // Add team entry to end of webpage
    document.getElementById("pokemonTeam").appendChild(newTeamMemberSlot);
}