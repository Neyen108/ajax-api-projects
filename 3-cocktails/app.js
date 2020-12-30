import presentDrinks from './src/presentDrinks.js';

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m";

window.addEventListener('DOMContentLoaded', () => {
    presentDrinks(URL);
})


