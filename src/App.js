import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import redditLogo from "./redditLogo.png";
import "./App.css";
import { Header } from "./components/header/Header";
import { Posts } from "./components/posts/Posts";
import { IndividualPost } from "./components/posts/individualPost/IndividualPost";
import { Subreddits } from "./components/subreddits/Subreddits";
import { getSubredditPosts } from "./components/Redux/Reddit";
import { changePosts } from "./components/Redux/postsSlice";

function App() {
  const activeSub = useSelector((state) => state.subreddits.activeSubreddit);
  const dispatch = useDispatch();

  useEffect(
    () =>
      getSubredditPosts(activeSub).then((response) => {
        dispatch(changePosts(response));
      }),
    [activeSub]
  );

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/individualPost">
              <IndividualPost />
            </Route>
            <Route exact path="/">
              <Posts />
            </Route>
          </Switch>

          <Subreddits logo={redditLogo} />
        </main>
      </div>
    </Router>
  );
}

export default App;
