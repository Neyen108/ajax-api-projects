const url = "https://api.chucknorris.io/jokes/random";

const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

btn.addEventListener('click', () => {
    fetch(url)
        .then((data) => data.json())
        .then((response) => displayData(response))
        .catch(error => console.log(error));
});

const displayData = ({value:joke}) => {
    content.textContent = joke;
};