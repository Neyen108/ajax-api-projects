import get from './getElement.js';

const displaySingleDrink = (data) => {
    //collect the data received from the api
    const drink = data.drinks[0];
    const imgSrc = drink.strDrinkThumb;
    const name = drink.strDrink;
    const description = drink.strInstructions;
    const ingredientsList = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
        drink.strIngredient6,
    ];

    //select the elements
    const img = get('.drink-img');
    const drinkName = get('.drink-name');
    const drinkDes = get('.drink-desc');
    const drinkIngredients = get('.drink-ingredients');

    //dynamically add the data
    img.src = imgSrc;
    window.document.title = name;
    drinkName.textContent = name;
    drinkDes.textContent = description;
    drinkIngredients.innerHTML = ingredientsList.map((item) => {
        if(item){
            return `<li><i class = "far fa-check-square"></i>${item}</li>`;
        }
    }).join('');

};

export default displaySingleDrink;