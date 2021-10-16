import SinglePost from './componets/SinglePost';
import TopBar from './componets/TopBar';
import './styles/style.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Footer from './componets/Footer';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  return (
<Router>
  <TopBar />
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/singlepost">
      <SinglePost />
    </Route>
    <Route path="/blog">
      <Blog />
    </Route>
    <Route path="/aboutus">
      <AboutUs />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
  </Switch>
  <Footer />
</Router>
  );
}

export default App;
