import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';

const presentDrinks = async (URL) => {
    //fetch drinks
    const drinks = await fetchDrinks(URL);
    
    //display drinks
    const section = await displayDrinks(drinks);
    
    if(section){
        setDrink(section);
    }

};

export default presentDrinks;