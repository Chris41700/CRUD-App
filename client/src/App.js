import './App.css';
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <Fragment>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
