import './App.css';
import React, { Fragment } from "react";

//Components
import InputWishlist from "./components/InputWishlist";
import ListWishlist from "./components/ListWishlist";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputWishlist />
        <ListWishlist />
      </div>
    </Fragment>
  );
}

export default App;
