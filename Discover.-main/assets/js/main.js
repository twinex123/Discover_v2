console.log("JS initializated")

var sound_button = document.querySelector(".toolbar");
var sound_icon = document.querySelector("#sound_icon");

var video_element = document.getElementById("video-background");



sound_button.addEventListener("click", function(){
    if (video_element.muted) {
        video_element.muted = false;  
        sound_icon.className = "fa-solid fa-volume-high"
    } else {
        video_element.muted = true;
        sound_icon.className = "fa-solid fa-volume-xmark"
    }
});


/* FILMS */

const apiKey = '077371dc51df63887b2d81143d1877e7'; 
const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const films = data.results;
        const filmsContainer = document.querySelector('.films-container');
        
        films.forEach(film => {
            const filmElement = document.createElement('div');
            filmElement.classList.add('film');

            filmElement.addEventListener("click", () => {
                window.location.href = `film.html?film=${film.title}`
            });
            
            const filmImage = document.createElement('img');
            filmImage.src = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
            filmImage.alt = film.title;
            
            const filmTitle = document.createElement('h3');
            filmTitle.textContent = film.title;

            
            filmElement.appendChild(filmImage);
            filmElement.appendChild(filmTitle);
            
            filmsContainer.appendChild(filmElement);
        });
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des films :', error);
    });

// TOGGLE NAVBAR

function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("active");
}
