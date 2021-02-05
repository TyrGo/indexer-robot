import { BrowserRouter, Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Video from "./Video"
import Home from "./Home";
import Done from "./Done";
import Help from "./Help";
import Donate from "./Donate";
import Error from "./Error";
import NavBar from "./NavBar"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Thanks from "./Thanks.js"
import PUB_KEY from "./config.js"
// const PUB_KEY = process.env.REACT_APP_PUB_KEY;

const stripePromise = loadStripe(PUB_KEY);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <div className="App">
        <Video />
        <BrowserRouter>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/done">
                <Done />
              </Route>
              <Route exact path="/help">
                <Help />
              </Route>
              <Route path="/donate">
                <Donate />
              </Route>
              <Route path="/thanks">
                <Thanks />
              </Route>
              <Route path="/error">
                <Error />
              </Route>
              <Route>
                <Redirect to="/error" />
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    </Elements>
  );
}

export default App;
