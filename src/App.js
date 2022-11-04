import React, { useEffect } from "react";
import "./Reset.css";
import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import LoginForm from "./components/LoginForm";
import RegistrForm from "./components/RegistrForm";
import ItemDetails from "./components/ItemDetails";
import AddNewFilm from "./components/AddNewFilm";
import { initMoviesFromLocalStorage } from "./components/moviesService";
import EditItem from "./components/EditItem";


function App() {
  useEffect(() => {
    initMoviesFromLocalStorage();
    /*  const filmsFromLocalStorage = JSON.parse(localStorage.getItem("movies"));
    if (filmsFromLocalStorage == null) {
      localStorage.setItem("movies", JSON.stringify(films));
    } */
  });
  // ==============---------LINKS!-----------==========
  return (
    <BrowserRouter>
      <Routes>
        <Route path="https://markhryshchenko.github.io/movies-react-app-useLocalstorage/ " element={<Main />} />;
        <Route path="https://markhryshchenko.github.io/movies-react-app-useLocalstorage/registr" element={<RegistrForm />} />;
        <Route path="https://markhryshchenko.github.io/movies-react-app-useLocalstorage/login" element={<LoginForm />} />
        <Route path="https://markhryshchenko.github.io/movies-react-app-useLocalstorage/itemDetails/:id" element={<ItemDetails />} />
        <Route path="https://markhryshchenko.github.io/movies-react-app-useLocalstorage/itemDetails/:id/edit" element={<EditItem />} />
        <Route path="https://markhryshchenko.github.io/movies-react-app-useLocalstorage/addnew" element={<AddNewFilm />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
