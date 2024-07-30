movies.map((movie) => {
    const cardMovie = document.createElement("div")
    const movieTitle = document.createElement("h3")
    const movieDirector = document.createElement("span")
    const movieYear = document.createElement("span")
    const movieDuration = document.createElement("span")
    const movieGenre = document.createElement("span")
    const movieRate = document.createElement("span")
    const moviePoster = document.createElement("img")
    
    movieTitle.innerText = movie.title
    movieDirector.innerText = movie.director
    movieYear.innerText = movie.year
    movieDuration.innerText = movie.duration
    movieGenre.innerText = movie.genre
    movieRate.innerText = movie.rate
    moviePoster.src = movie.poster

    cardMovie.appendChild(movieTitle)
    cardMovie.appendChild(movieDirector)
    cardMovie.appendChild(movieYear)
    cardMovie.appendChild(movieDuration)
    cardMovie.appendChild(movieGenre)
    cardMovie.appendChild(movieRate)
    cardMovie.appendChild(moviePoster)

    const moviesContainer = document.getElementById("movies-cards")
    moviesContainer.appendChild(cardMovie)

})