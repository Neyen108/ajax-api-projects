import get from "./utilities/get-element.js";
import getUser from './utilities/getUser.js';
import displayUser from './utilities/displayUser.js';

const btn = get('.btn');

const showUser = async () => {
    const person  = await getUser();
    displayUser(person);
};

btn.addEventListener('click', showUser);

window.addEventListener('DOMContentLoaded', showUser);



