import React from 'react'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={'/'}>
					<Home />
				</Route>
				<Route exact path={'/:user'}>
					<Profile />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Router
