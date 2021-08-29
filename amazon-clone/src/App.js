import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Checkout from "./component/Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // A piece of coce which runs based on a given condition -> useEffect
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // usr is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // any cleanup operations...
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout></Checkout>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
