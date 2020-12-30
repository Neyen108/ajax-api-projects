import get from "./utilities/get-element.js";
import getUser from './utilities/getUser.js';


const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btn = get('.btn');

const btns = [...document.querySelectorAll('.icon')];


const showUser = async () => {
    const person  = await getUser();
    console.log(person);

}

btn.addEventListener('click', ()=>{
    showUser();
});



