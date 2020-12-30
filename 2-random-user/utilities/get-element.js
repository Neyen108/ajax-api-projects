//function to select an element

const getElement = (selection) => {
    const element = document.querySelector(selection);
    if(element) return element;
    throw new Error (`no such ${selection} element`);
} 

export default getElement;