// export const movie = [
//   {
//     id: 1,
//     title: "Avengers: Endgame",
//     image: "https://via.placeholder.com/200x300",
//     rating: 8.5,
//   },
//   {
//     id: 2,
//     title: "Inception",
//     image: "https://via.placeholder.com/200x300",
//     rating: 8.8,
//   },
// ];

const API_KEY = "4608ecf362a019ecb8edbed72c9fe28e";
const BASE_URL = "https://api.themoviedb.org/3";

async function getGenres() {
  const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  const data = await res.json();

  const genreMap = {};
  data.genres.forEach(g => {
    genreMap[g.id] = g.name;
  });

  return genreMap;
}

export async function getNowPlayingMovies() {
  const genreMap = await getGenres();

  const res = await fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&region=IN`
  );
  const data = await res.json();

  return data.results.map(movie => ({
    title: movie.title,
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    popularity: movie.vote_average,
    genres: movie.genre_ids.map(id => genreMap[id])
  }));
}
export async function getUpcomingMovies() {
  const genreMap = await getGenres();

  const res = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&region=IN`
  );
  const data = await res.json();

  return data.results.map(movie => ({
    title: movie.title,
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    popularity: movie.popularity,
    genres: movie.genre_ids.map(id => genreMap[id])
  }));
}