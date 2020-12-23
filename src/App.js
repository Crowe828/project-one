import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import API from "./Utils/API";
import Splash from "./Pages/Splash";
import Main from "./Pages/Main";
import "./App.css";

export const App = () => {
  // state for data that comes in for the API call and the search term in the search bar
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  // On mount state will display tattoo images
  useEffect(() => {
    getDefault();
  }, []);

  // Function that sets state to tattoo images
  function getDefault() {
    API.defaultData()
      .then((res) => {
        setResults(res.data.results);
      })
      .catch((err) => console.log(err));
  }

  // Search for an image
  function getPics(query) {
    API.getData(query)
      .then((res) => setResults(res.data.results))
      .then(console.log(results))
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    setSearch(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    getPics(search);
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route path="/main">
            <Main
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
              results={results}
              search={search}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
