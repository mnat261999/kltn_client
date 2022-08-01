import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import StatusModal from './components/StatusModal';
import PageRender from './customRouter/PageRender';
import PrivateRouter from './customRouter/PrivateRouter';
import Activate from './pages/activate';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import { refreshToken } from './redux/actions/authAction';
import { getPosts } from './redux/actions/postAction';



function App() {
	const {auth, status, modal} = useSelector(state => state)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(refreshToken())
	},[dispatch])

	useEffect(() => {
		if(auth.token) dispatch(getPosts(auth.token))
	},[dispatch, auth.token])
	
	return (
		<Router>
			{/* <input type="checkbox" id="theme" /> */}
			<Route exact path="/" component={auth.token ? "" : Login}/>
			<Route exact path="/register" component={Register} />
			<Route path="/activate/:activation_token" exact component={Activate} />
			<div className={`App ${(status || modal) && 'mode'}`}>
				<div className="main">
					{auth.token && <Header/>}
					{status && <StatusModal />}
				    <Route exact path="/" component={auth.token ? Home : ""}/>
					<Route exact path="/:page" component={PageRender}/>
					<Route exact path="/:page/:id" component={PageRender}/>
				</div>
			</div>
		</Router>
	);
}

export default App;
