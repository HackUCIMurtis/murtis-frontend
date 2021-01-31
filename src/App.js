import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Search from './components/Search'
import Navigation from './components/Navigation'
import Login from './components/Login'
import Home from './components/Home'
// import Create from './components/Create'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/search" component={Search} />
            {/* <Route path="/create" component={Create} /> */}
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
