import './styles/App.css';
import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
// import ExperiencesPage from './pages/ExperiencesPage';
import Header from './components/Header';
import Footer from './components/Footer';

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Router>
      <Header />
      <Switch>

        {!authCtx.isLoggedIn && (
          <Route path="/login">
            <LoginPage />
          </Route>
        )}
        {!authCtx.isLoggedIn && (
          <Route path="/register">
            <RegisterPage />
          </Route>
        )}

        <Route exact path='/' >
          <HomePage />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
