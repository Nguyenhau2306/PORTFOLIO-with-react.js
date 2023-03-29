import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blogs" component={Blogs} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
