import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from 'pages/Layout'
import ErrorRouter from 'pages/ErrorRouter'
import Home from 'pages/Home'
import QuienesSomos from 'pages/QuienesSomos'
import CampusChuao from 'pages/CampusChuao'

export default function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
					<Route exact path={`${process.env.PUBLIC_URL}/quienes-somos`} component={QuienesSomos} />
					<Route exact path={`${process.env.PUBLIC_URL}/plataformas-virtuales`} component={CampusChuao} />
					<Route component={ErrorRouter} />
				</Switch>
			</Layout>
		</BrowserRouter>
	)
}
