import { films } from "../dataFilms";

export async function getMoviesFromLocalStorage() {
  return JSON.parse(localStorage.getItem("movies"));
}
export async function addMoviesToLocalStorage(newItem) {
  const items = JSON.parse(localStorage.getItem("movies")) || [];
  localStorage.setItem("movies", JSON.stringify([...items, newItem]));
}
export async function initMoviesFromLocalStorage() {
  const itemsFromStorage = JSON.parse(localStorage.getItem("movies"));
  if (itemsFromStorage === null) {
    localStorage.setItem("movies", JSON.stringify(films));
  }
}


/* const apiUrl = "http://localhost:5000";


export async function getMovies() {
  const data = await fetch(`${apiUrl}/movies`);
  const movies = await data.json();
  return movies;
}
export async function deleteMovies(id) {
  await fetch(`${apiUrl}/movies/${id}`, {
    method: "DELETE",
  })
}

export async function editMovies(id, newItem) {
  await fetch(`${apiUrl}/movies/${id}`, {
    method: "PUT",
    body: JSON.stringify(newItem),
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export async function addMovies(newItem) {
 await fetch(`${apiUrl}/movies`, {
    method: 'POST',
    body: JSON.stringify(newItem),
    headers: {
      "Content-Type": "application/json",
    },
 })
}
export async function initMovies(newItem) {
 await fetch(`${apiUrl}/movies/`, {
    method: 'PUT',
    body: JSON.stringify(newItem),
    headers: {
      "Content-Type": "application/json",
    },
    
 })
}

 */

