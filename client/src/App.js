import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import './App.css';
// resume at 2:03 - context api
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* default route must be at the bottom */}
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
