import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route to="/" exact component={Home} />
          {/* <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
