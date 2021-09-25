import './App.css';
import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Typography from "./styles/Typography";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
        <Router>
            <NavMenu />
            <GlobalStyles />
            <Typography />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
            <Switch>
                <Route path="/projects">
                    <Projects />
                </Route>
            </Switch>
            <Switch>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
