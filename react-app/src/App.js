import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginPage from "./components/LoginPage";
import SignUpForm from "./components/LoginPage/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/reUsedComponents/ProtectedRoute";
import UsersList from "./components/UsersList";
// import User from "./components/User";
import TempFollow from "./components/TempFollow";
import TempPost from "./components/CreatePost/TempPost";
import TempComment from "./components/CreateComment/TempComment";
import { authenticate } from "./store/session";
import { useSelector } from "react-redux";
import HomeFeed from "./components/HomeFeed";
import UserProfile from "./components/UserProfile";
import ExplorePage from "./components/ExplorePage";

function App() {
  const [loaded, setLoaded] = useState(false);
  const user = useSelector((state) => state.session.user);
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
      {user && <NavBar />}
      <Switch>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/explore" exact={true}>
          <ExplorePage />
        </ProtectedRoute>
        <ProtectedRoute path="/:userId" exact={true}>
          {/* <ExplorePage /> */}
          <UserProfile />
        </ProtectedRoute>
        {user ? (
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
