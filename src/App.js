import React, { Component } from 'react';

import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import Login from './Components/Login/Login';
import ArticleList from './Components/Article/ArticleList';
import Home from './Components/Home/Home';
import SignOut from './Components/SingOut/SignOut';


class App extends Component {



  getRoutes = () => {
    let routes = null
    let navs = null

    let LoginInfo = JSON.parse(localStorage.getItem('LoginInfo'))
    let isLogin = LoginInfo ? LoginInfo.token : ''

    if (isLogin) {
      routes =
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ArticleList" exact component={ArticleList} />
          <Route path="/SignOut" exact component={SignOut} />
        </Switch>

      navs =
        <ul>
          <li>
            <Link to="/">صفحه اصلی</Link></li>
          <li>
            <Link to="/ArticleList">لیست مقالات</Link>
          </li>
          <li>
            <Link to="/SignOut">خروج</Link>
          </li>
        </ul>
    }
    else {
      routes =
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/login" exact component={Login} />

          <Redirect to="/login" />
        </Switch>

      navs =
        <ul>
          <li>
            <Link to="/">صفحه اصلی</Link></li>

          <li>
            <Link to="/login">ورود</Link>
          </li>

        </ul>


    }

    return {
      routes,
      navs
    }

  }

  render() {
    const { routes, navs } = this.getRoutes()
    return (
      <BrowserRouter>
        <nav>
          {navs}
        </nav>


        {routes}

      </BrowserRouter>
    );
  }
}
export default App;