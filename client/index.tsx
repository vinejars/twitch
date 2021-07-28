import * as React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<Routes />
	</Router>,
	document.getElementById('app')
);
