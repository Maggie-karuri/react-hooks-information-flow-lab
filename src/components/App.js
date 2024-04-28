import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Filter from "./Filter";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const handleCategoryChange = (category) => {
    console.log("Selected category:", category);
  };

  
   return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
        
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
