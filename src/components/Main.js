import React, { useEffect } from "react";
import "../Reset.css";
import "../styles/main.css";
import Header from "./Header";
import Footer from "./Footer";
import Items from "./Items";
import { getMoviesFromLocalStorage } from "./moviesService";
import { Link } from "react-router-dom";
import { films } from "../dataFilms";

export default function Main() {
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      const movies = await getMoviesFromLocalStorage();
      setItems(movies);
    }
    fetchData();
  }, []);

  const deleteItem = (id) => {
    setItems([...items.filter((items) => items.id !== id)]);
    console.log(items);
    localStorage.setItem("movies", JSON.stringify(items));
    getMoviesFromLocalStorage();
    //deleteMovies(id);
  };
  const backupMoviesClick = () => {
    localStorage.removeItem("movies");
    localStorage.setItem("movies", JSON.stringify(films));
    async function fetchData() {
      const movies = await getMoviesFromLocalStorage();
      setItems(movies);
    }
    fetchData();
  };

  return (
    <div className="app">
      <Header />
      <div className="control-nav">
        <div
          onClick={backupMoviesClick}
          className="add-link_btn hidden-btn-main"
        >
          default movies
        </div>
        <Link to="/addnew" className="add-link_btn">
          + Add Film
        </Link>
      </div>

      <Items deleteItem={deleteItem} items={items} />
      <Footer />
    </div>
  );
}
