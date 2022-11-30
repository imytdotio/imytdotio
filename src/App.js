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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
