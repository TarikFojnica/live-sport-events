import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/sections/Layout';
import Event from './components/pages/events/Event';
import Live from './components/pages/live/Live';

const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={Live}/>
		<Route path="event/:id" component={Event}/>
	</Route>
);

export default routes;