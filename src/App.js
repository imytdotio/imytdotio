import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Products } from "./Pages/Products_dumb";
import { Home } from "./Pages/Home";
import { Nav } from "./Components/Nav";
import { SimpleNav } from "./Components/SimpleNav";

import { Bets } from "./Pages/Bets";
import { Stack } from "./Pages/Stack";
import { Blog } from "./Pages/Blog";
import { CV } from "./Pages/CV";
import { Test } from "./Pages/Test";
import { Footer } from "./Components/Footer";

function App() {
  return (
    // <div className="App my-16 flex m-auto">
    <div className="App my-16 m-auto">
      <BrowserRouter>
        <SimpleNav />
        {/* <div className="collapse lg:visible">
          <Nav />
        </div> */}
        <Switch>
          <Route path="/" exact>
            <Home />
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
