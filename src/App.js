import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Products } from "./Pages/Products";
import { Home } from "./Pages/Home";
import { Nav } from "./Components/Nav";

function App() {
  return (
    <div className="App flex w-screen">
      <Nav className='flex-1 flex'/>
      <BrowserRouter className='flex-grow w-max m-auto'>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
