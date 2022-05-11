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
import CheckoutTemplate  from './teamplates/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import { UserTemplate } from './teamplates/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';
import Profile from './pages/Profile/Profile';
import AdminTemplate from './teamplates/AdminTemplate/AdminTemplate';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import AddNew from './pages/Admin/Films/AddNew/AddNew';
import Edit from './pages/Admin/Films/Edit/Edit';
import ShowTime from './pages/Admin/ShowTime/ShowTime';
import Films from './pages/Admin/Films/Films';
// import { Suspense, lazy } from 'react';

// const CheckoutTemplateLazy = lazy(() => import ('./teamplates/CheckoutTemplate/CheckoutTemplate'));

export const history = createBrowserHistory();



function App() {
  return (

    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} /> 
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path="/profile" exact Component={Profile} />
        
        {/* <Route path="/register" exact component={Register} /> */}

        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />


        {/* <Suspense fallback={<img src="https://phimapi.herokuapp.com/uploads/Loading.jpg" width='100%' height='100%' />}>
        <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout} />
        </Suspense> */} 
        <UserTemplate path="/login" exact Component={Login} />
        <UserTemplate path="/register" exact Component={Register} />

        <AdminTemplate path="/admin" exact Component={Dashboard} />
        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/users" exact Component={Dashboard} />
        {/* <AdminTemplate path="/admin/films/addnew" exact Component={AddNew} /> */}
        {/* <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit} /> */}
        {/* <AdminTemplate path="/admin/showtime" exact Component={ShowTime} /> */}

        
        <AdminTemplate path="/admin/showtimes" exact Component={ShowTime} />
        <HomeTemplate path="/" exact Component={Home} />
        
        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
