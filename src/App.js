import './App.css';
import { createBrowserHistory } from 'history';
import { Router,Switch } from 'react-router'
import { HomeTemplate } from './teamplates/HomeTemplate/HomeTeamplate';
import Home from './pages/Home/Home';
import Contact from './pages/Home/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Detail from './pages/Detail/Detail';


export const history = createBrowserHistory();



function App() {
  return (

    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <Route path="/login" exact Component={Login} />
        <Route path="/register" exact Component={Register} />
        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
