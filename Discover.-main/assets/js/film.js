const urlParams = new URLSearchParams(window.location.search);
const movieName = urlParams.get('film'); 

if (movieName) {
    const apiKey = '077371dc51df63887b2d81143d1877e7'; 
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}&language=fr`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const movie = data.results[0]; 
            if (movie) {
                console.log(movie)
                document.getElementById('movieTitle').textContent = movie.title;
                document.getElementById('movieTitle').style.fontFamily = "Krono One";
                document.getElementById('releaseDate').textContent = movie.release_date;
                const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                document.getElementById('moviePoster').src = posterUrl;
                document.getElementById("film-overview").innerText = movie.overview;
                if (movie.backdrop_path) {
                    const imageBackground = document.getElementById("image-background");
                    const backdropUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
                    imageBackground.style.background = `url(${backdropUrl})`;
                    imageBackground.style.repeat = "no-repeat";
                    imageBackground.style.backgroundSize = "cover";
                    imageBackground.style.backgroundPosition = "center";
                }

                var vote_average = Math.round(movie.vote_average);
                document.getElementById("vote").innerHTML = `${vote_average}/10 <i class="fa-solid fa-heart"></i>`


            } else {
                alert('Film non trouvé.');
            }
        })
        .catch(error => {
            console.error('Erreur de récupération des données:', error);
        });
} else {
    alert('Veuillez entrer un film dans l\'URL avec le paramètre "film". Exemple: ?film=Example');
}