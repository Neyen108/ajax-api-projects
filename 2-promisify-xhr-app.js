const url = "https://api.chucknorris.io/jokes/random";

const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

btn.addEventListener('click', () => {
    getData(url)
        .then((data) => displayData(data))
        .catch((error)=>console.log(error));
});

const getData = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = function (){
            if(xhr.readyState !== 4) return;
            if(xhr.status === 200){
                resolve(xhr.responseText);
            }  
            else{
                reject(new Error(`status not === 200`));
            }
        };
    });  
};

const displayData = (data) => {
    const {value:joke} = JSON.parse(data);
    content.textContent = joke;
}