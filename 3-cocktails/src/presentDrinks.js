import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';

const presentDrinks = async (URL) => {
    //fetch drinks
    const drinks = await fetchDrinks(URL);
    
    //display drinks
    const section = await displayDrinks(drinks);
    
};

export default presentDrinks;