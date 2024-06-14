import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import { fetchCategories } from "./api";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ListItem from "./components/ListItem";

function App() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then(
      ({ data }) => {
          setCategories(data.categories);
        });
      },
      []
    );

  return (
    <section>
      <Header />
      <Nav
        category={category}
        setCategory={setCategory}
        categories={categories}
      />
      <Routes>
        <Route path={"/"} element={<Home category={category} />} />
        <Route
          path={"/ListItem"}
          element={<ListItem category={category} categories={categories} />}
        />
        <Route path={"/:category"} element={<Home category={category} />} />
      </Routes>
    </section>
  );
}

export default App;
