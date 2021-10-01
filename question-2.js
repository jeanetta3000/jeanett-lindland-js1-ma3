const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=b4fb8391b6ed47d6be538aea8fb7cda1";

const resultsContainer = document.querySelector(".result");

async function getGames() {

    const response = await fetch(url);

    const results = await response.json();

    const games = results.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++){
        console.log(games[i].name);
        console.log(games[i].rating);
        console.log(games[i].tags.length);

        if(i === 8){
            break;
        }

        resultsContainer.innerHTML += `<div class="result">${games[i].name}${games[i].rating}${games[i].tags.length}</div>`;
    }

}

getGames();