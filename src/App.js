import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { DataProvider, GlobalState } from './GlobalState';
import Pages from './components/pages/Page'
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken } from './redux/actions/authAction';
import HeaderUser from './components/header/user/HeaderUser';



function App() {
	const state = useContext(GlobalState)

	const dispatch = useDispatch()

	const auth = useSelector(state => state.auth)

    const {isLogin, isAdmin} = auth

	useEffect(() => {
		dispatch(refreshToken())
	}, [dispatch])

	const userPage = () =>{
		return <>
		{!isLogin && <Pages />}
		{isLogin && 
		<div class="wrapper">
			<HeaderUser/>
			<Pages />
		</div>
		}
		</>
	  }

	return (
		<DataProvider>
			<Router>
				<div className='App'>
					<div className="main">
						{isAdmin && ""|| userPage()}
					</div>
				</div>
			</Router>
		</DataProvider>
	);
}

export default App;
