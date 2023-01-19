import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Products } from "./Pages/Products";
import { Home } from "./Pages/Home";
import { Nav } from "./Components/Nav";
import { SimpleNav } from "./Components/SimpleNav";

import { Bets } from "./Pages/Bets";
import { Stack } from "./Pages/Stack";
import { Blog } from "./Pages/Blog";
import { CV } from "./Pages/CV";
import { Test } from "./Pages/Test";
// import { Footer } from "./Components/Footer";
import { Changelog } from "./Pages/Changelog";
// import { Products_dumb } from "./Pages/Products_dumb";

function App() {
  return (
    <div className="App my-16 flex lg:flex-row flex-col m-auto">
      {/* <div className="App my-16 m-auto"> */}
      <BrowserRouter>
        <div className="lg:collapse visible">
          <SimpleNav />
        </div>
        <div className="collapse lg:visible">
          <Nav />
        </div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/bets" exact>
            <Bets />
          </Route>
          <Route path="/stack" exact>
            <Stack />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/cv" exact>
            <CV />
          </Route>
          <Route path="/test" exact>
            <Test />
          </Route>
          <Route path="/changelog" exact>
            <Changelog />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
