
import './App.css';

import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router';

import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { ProfileTemplate } from './templates/HomeTemplate/ProfileTemplate'
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import Detail from './pages/Detail/Detail';
import { UserTemplate } from './templates/HomeTemplate/UserTemplate/UserTemplate';
// import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import TestPage from "./pages/Test/TestPage";
import UserList from "./pages/Test/UserList";
import Edituser from "./pages/Test/Edituser";
import Admin from "./pages/Admin/Admin";
import Register1 from './pages/Register/Register1';
import Adduser from './pages/Test/Adduser';
import Addproduct from './pages/Test/Addproduct';
import ProductList from "./pages/Test/ProductList";

import Article from './pages/Article/Article';

// PROFILE OF ADMIN
import Profile from "./pages/profile/Profile";
import ManageUser from './pages/ManageUsers/ManageUsers';
import ManageProducts from './pages/ManageProducts/ManageProducts';
import ManageAddress from './pages/ManageAddress/ManageAddress';
import ManageNews from './pages/ManageNews/ManageNews';
import ManageContact from './pages/ManageContact/ManageContact';
import ManageCarousel from './pages/ManageCarousel/ManageCarousel';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      {/* <Route path="/admin">
        <Admin />
      </Route> */}
      <Switch>
        <ProfileTemplate path='/admin' exact Component={Profile} />
        <ProfileTemplate path='/manageUsers' exact Component={ManageUser} />
        <ProfileTemplate path='/manageProducts' exact Component={ManageProducts} />
        <ProfileTemplate path='/manageNews' exact Component={ManageNews} />
        <ProfileTemplate path='/manageContact' exact Component={ManageContact} />
        <ProfileTemplate path='/manageAddress' exact Component={ManageAddress} />
        <ProfileTemplate path='/manageCarousel' exact Component={ManageCarousel} />


        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/about" exact Component={About} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        {/* <HomeTemplate path="/cp" exact Component={Cartm} /> */}
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/add" exact Component={Adduser} />
        <HomeTemplate path="/addp" exact Component={Addproduct} />
        <HomeTemplate path="/product" exact Component={ProductList} />
        {/* <HomeTemplate path="/admin" exact Component={Admin} /> */}
        {/* <HomeTemplate path="/admin" Component={AdminTemplate} /> */}
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path="/cart" exact Component={Cart} />
        <UserTemplate path="/login" exact Component={Login} />
        <UserTemplate path="/register" exact Component={Register} />
        <UserTemplate path="/register1" exact Component={Register1} />
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/test" exact Component={TestPage} />
        <HomeTemplate path="/user" exact Component={UserList} />
        <HomeTemplate path="/edit/:id" exact Component={Edituser} />
        <HomeTemplate path="/article" exact Component={Article} />
        <ToastContainer />
        <Route />
        <Route  >
          <NotFound />
        </Route>
      </Switch>
      
    </Router>

  );
}

export default App;
