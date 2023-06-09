import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Information from "./components/Information";
import Skill from "./components/Skill";
import Blogs from "./components/Blogs";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/skill" component={Skill} />
        <Route exact path="/information" component={Information} />
        <Route exact path="/blogs" component={Blogs} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
