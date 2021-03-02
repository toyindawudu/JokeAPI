// Link to the HTML
const jokeText = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-Btn");

// Adding the Event listeners
jokeBtn.addEventListener("click", generateJokes);

generateJokes();

// Build your functions

async function generateJokes(){
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Dark,Pun,Spooky?blacklistFlags=nsfw,political,racist,explicit"
  )

  const data = await res.json();
  console.log(data);
  let joke = "";
  if (data.joke === undefined){
    joke = `${data.setup} <br /> ${data.delivery}`
  } else {
    joke = data.joke
  }
  jokeText.innerHTML = joke
}


