import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginPage from "./components/LoginPage";
import SignUpForm from "./components/LoginPage/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import TempFollow from "./components/TempFollow";
import TempPost from "./components/CreatePost/TempPost";
import LoginForm from "./components/LoginPage";
import { authenticate } from "./store/session";
import { useSelector } from "react-redux";
import HomeFeed from "./components/HomeFeed";
import UserProfile from "./components/UserProfile";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  useEffect(() => {
    if (user) setLoggedIn(true);
    else setLoggedIn(false);
  }, [user]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {loggedIn && <NavBar />}
      <Switch>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <Route path="/:userId" exact={true}>
          <UserProfile />
        </Route>
        <ProtectedRoute path="/explore" exact={true}>
          Explore
        </ProtectedRoute>
        {/*Route for testing follow and unfollow*/}
        <ProtectedRoute path="/follow" exact={true}>
          <TempFollow />
        </ProtectedRoute>
        {/* Route for testing posts */}
        <ProtectedRoute path="/posts" exact={true}>
          <TempPost />
        </ProtectedRoute>
        {loggedIn ? (
          <Route path="/" exact={true}>
            <HomeFeed />
          </Route>
        ) : (
          <Route path="/" exact={true}>
            <LoginPage />
          </Route>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
