import './App.css';
import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Typography from "./styles/Typography";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
        <Router>
            <NavMenu />
            <ScrollToTop />
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
            <Footer />
        </Router>
    </div>
  );
}

export default App;
