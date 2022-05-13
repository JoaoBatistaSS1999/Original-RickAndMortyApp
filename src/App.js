import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [name, setName] = useState("loading...");
  const [gender, setGender] = useState("loading...");
  const [status, setStatus] = useState("loading...");
  const [species, setSpecies] = useState("loading...");
  const [origin, setOrigin] = useState("loading...");
  const [location, setLocation] = useState("loading...");
  const [image, setImage] = useState();

  const [charNumber, setCharNumber] = useState(1);

  useEffect(() => {
    handleClick();
  }, []);

  const fetchData = () => {
    fetch(`https://rickandmortyapi.com/api/character/${charNumber}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setGender(data.gender);
        setStatus(data.status);
        setSpecies(data.species);
        setOrigin(data.origin.name);
        setLocation(data.location.name);
        setImage(data.image);
      });
  };

  const handleClick = () => {
    setCharNumber(Math.floor(Math.random() * (826 - 1)) + 1);
    fetchData();
  };

  return (
    <div className={classes.container}>
      <div className={classes.portrait}>
        <img src={image} alt={name} className={classes.image} />
      </div>
      <div className={classes.information}>
        <main className={classes.content}>
          <h2 className={classes.name}>{name}</h2>
          <section className={classes.stats}>
            <div className={classes.list}>
              <span>Gender: {gender}</span>
              <span>Status: {status}</span>
              <span>Species: {species}</span>
              <span>Origin: {origin}</span>
              <span>Location: {location}</span>
            </div>
          </section>
        </main>
      </div>
      <div className={classes["button-container"]}>
        <button className={classes.change}>
          <span className={classes["button-text"]} onClick={handleClick}>
            Change Charcter
          </span>
          <FontAwesomeIcon icon={faArrowsRotate} />
        </button>
      </div>
    </div>
  );
};

export default App;
