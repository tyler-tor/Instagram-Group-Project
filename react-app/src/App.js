import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginPage from "./components/LoginPage";
import SignUpForm from "./components/LoginPage/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import { useSelector } from "react-redux";
import HomeFeed from "./components/HomeFeed";

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
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/explore" exact={true}>
          Explore
        </ProtectedRoute>
        {/* <Route path="/" exact={true}>
          <HomeFeed />
        </Route> */}
        <Route path="/" exact={true}>
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
