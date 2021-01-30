import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Search></Search>
    </div>
  );
}

export default App;
