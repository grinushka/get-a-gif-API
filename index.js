"use strict";

const img = document.querySelector('img');
const searchTerm = document.querySelector('.searchTerm');
const searchButton = document.querySelector('.searchButton');

// Seach for dogs when the load loads first
window.onload = () => {
  getNewGif('dogs')
}

// Event listeners
searchButton.addEventListener('click', () =>{
  getNewGif(searchTerm);
});
window.addEventListener('keypress', (event) => {
  enterKeyPressed(event)
})

// check if the key pressed is 'Enter'
function enterKeyPressed(event) {
  if (event.keyCode == 13) {
     getNewGif(searchTerm);
  }
}

// Get a new gif each the time search term changes
function getNewGif(searchTerm) {
  let fetchURL;
  if (typeof searchTerm === 'string') {
    fetchURL = `https://api.giphy.com/v1/gifs/translate?api_key=qpavuQRP8xmCC8Lt7UhOabxU2iMMEUVa&s=`+ searchTerm;
  } else {
    fetchURL = `https://api.giphy.com/v1/gifs/translate?api_key=qpavuQRP8xmCC8Lt7UhOabxU2iMMEUVa&s=`+ searchTerm.value;
  }

  fetch(fetchURL, {mode: 'cors'})
  .then(function(response) {
    return (response.json());
  })
  .then(function(response) {
    let imgUrl = response.data.images.original.url;
    img.src = imgUrl;
    searchTerm.value = '';
  })
  .catch(e => {
    console.log(e);
  })
}