import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import PageRender from './customRouter/PageRender';
import PrivateRouter from './customRouter/PrivateRouter';
import Activate from './pages/activate';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import { refreshToken } from './redux/actions/authAction';



function App() {
	const {auth} = useSelector(state => state)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(refreshToken())
	},[dispatch])
	
	return (
		<Router>
			{/* <input type="checkbox" id="theme" /> */}
			<Route exact path="/" component={auth.token ? "" : Login}/>
			<Route exact path="/register" component={Register} />
			<Route path="/activate/:activation_token" exact component={Activate} />
			<div className="App">
				<div className="main">
					{auth.token && <Header/>}
				    <Route exact path="/" component={auth.token ? Home : ""}/>
					<PrivateRouter exact path="/:page" component={PageRender}/>
					<PrivateRouter exact path="/:page/:id" component={PageRender}/>
				</div>
			</div>
		</Router>
	);
}

export default App;
