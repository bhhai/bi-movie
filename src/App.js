import { Route, Switch } from "react-router";
import "./App.css";
import Detail from "./components/Detail/Detail";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Home from "./Feature/Home";
import Movie from "./Feature/Movie";
import Tv from "./Feature/Tv";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie" component={Movie} />
        <Route exact path="/tv" component={Tv} />
        <Route path="/:category/:id" component={Detail} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
