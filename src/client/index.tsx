import * as React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes'

//import { Provider } from 'react-redux';
//import store from './store/store'
//import firebase from '../firebase/config'


ReactDOM.render(
//<Provider store={store}>
<Routes/>
//</Provider>
, document.getElementById('app'));