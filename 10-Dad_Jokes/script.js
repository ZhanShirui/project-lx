const article = document.querySelector('#article')
const btn = document.querySelector('#jokeBtn')

btn.addEventListener('click',getJoke)

async function getJoke(){
    let response = await fetch('https://icanhazdadjoke.com',{
        headers: {
            accept: 'application/json'
        }
    })
    let data = await response.json();
    article.innerHTML = data.joke;
}