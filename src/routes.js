import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/sections/Layout';
import Event from './components/pages/events/Event';

const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={Event}/>
		<Route path="event/:id" component={Event}/>
	</Route>
);

export default routes;