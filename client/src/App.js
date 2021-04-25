import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Checkout from './Checkout';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import './App.css';
// resume at 3:22 - authentication (will do with OAUTH)
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* default route must be at the bottom */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
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
