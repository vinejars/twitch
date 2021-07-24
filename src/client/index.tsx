import * as React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes'
import {Router} from 'react-router-dom'
import history from './history'

ReactDOM.render(
<Router history={history}>
<Routes/>
</Router>, document.getElementById('app'));