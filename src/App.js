import React from 'react';
import './App.css';

const APP_ID = "9ddcb45d";
const APP_KEY = "e6ae5d97157d10ba429f443a7e936fbd";

const App = () => {
  const apiCall =`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className= "App">
      <form className= "search-form">
        <input className= "search-bar" type= "text"/>
        <button className= "search-button" type= "submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
