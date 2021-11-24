import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
// import ProtectedRoute from "./components/auth/ProtectedRoute";
import ListingsPage from "./components/ListingsPage/index";
import ListingView from "./components/ListingView";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/users" exact={true}>
          <UsersList />
        </Route>
        <Route path="/users/:userId" exact={true}>
          <User />
        </Route>
        <Route path="/" exact={true}>
          <h1>Welcome to HauteFinder</h1>
        </Route>
        <Route path="/listings" exact={true}>
          <ListingsPage />
        
        </Route>
        <Route path="/listings/:id" exact={true}>
          <ListingView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
