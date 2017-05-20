// Tarik Fojnica

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/sections/Layout';
import Event from './components/pages/events/Event';
import EventList from './components/pages/events/EventsList'
import Live from './components/pages/live/Live';

const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={Live}/>
		<Route path="events" component={EventList}/>
		<Route path="events/:id" component={Event}/>
		<Route path="/" component={Event}/>
	</Route>
);

export default routes;