const jokecontainer = document.getElementById('joke');
const btn = document.getElementById("btn");
const url = "";

let getjoke = () =>{

    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokecontainer.textContent =`${item.joke}`;
    });

}
btn.addEventListener("click",getjoke)

getjoke();