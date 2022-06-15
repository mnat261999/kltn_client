import React,{useEffect,useContext} from 'react';
import {Route,useLocation } from 'react-router-dom'
import Login from './user/authen/Login'
import Register from './user/authen/Register'
import Home from './user/home/Home';
import NewFeed from './user/newfeeds/NewFeed';
import NotFound from '../../utils/NotFound';
import {useSelector} from 'react-redux'
import Activate from './user/authen/Activate';




function Pages() {
    const auth = useSelector(state => state.auth)

    const {isLogin, isAdmin} = auth
 
    return (
        <>
        {isLogin && !isAdmin &&  <Route exact path="/" component={NewFeed} /> || <Route exact path="/" component={Login} />}
         
        <Route path="/register" exact component={isLogin ? NotFound : Register} />

        <Route path="/activate/:activation_token" exact component={Activate} />

        <Route path="/profile/:id" exact component={isLogin ? Home : NotFound} />
        </>
    );
}

export default Pages;