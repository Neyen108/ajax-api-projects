import get from './getElement.js';

const displayDrinks = ({drinks}) => {
    const section = get('.section-center');
    const title = get('.title');
    
    if(!drinks){
        //hide loading
        title.textContent = "Sorry, No Drinks Found";
        section.innerHTML = null;
        return;
    }
    
    const drinksSection = drinks.map((drink) => {
        const imgSrc = drink.strDrinkThumb;
        const id = drink.idDrink;
        const name = drink.strDrink;
        return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${imgSrc}" alt="cocktail" />
            <h3>${name}</h3>
          </article>
        </a>`
    }).join('');
    
    //hide loading
    title.textContent = '';
    section.innerHTML = drinksSection;
    return section;
};

export default displayDrinks;