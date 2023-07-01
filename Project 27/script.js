const apiURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const imgPath = "https://image.tmdb.org/t/p/w1280";
const searchAPI =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(apiURL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  //   console.log(data.results);
  showMovies(data.results);
}

function imgLoader(imglink) {
  const img =
    imglink == null
      ? "https://www.shutterstock.com/image-vector/movie-night-concept-creative-template-600w-1055348723.jpg"
      : imgPath + imglink;

  return img;
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    console.log(imgPath + poster_path);

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
        <img src="${imgLoader(poster_path)}" alt="${title}" >
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        <div>

        <div class="overview">
          <h3>Overview<h3>
          <p>${overview}</p>
        </div>
    `;
    console.log("yes");

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(searchAPI + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
