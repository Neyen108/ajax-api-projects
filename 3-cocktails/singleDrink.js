import fetchDrinks from './src/fetchDrinks.js';
import displaySingleDrink from './src/displaySingleDrink.js';

const presentSingleDrink = async () => {
    const id = localStorage.getItem('drink');
    const drink = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

    displaySingleDrink(drink);

};

window.addEventListener('DOMContentLoaded', presentSingleDrink);

