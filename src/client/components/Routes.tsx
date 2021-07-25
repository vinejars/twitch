import * as React from 'react'
import {HashRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './Main'
import Signup from './Signup'
import Login from './Login'
import ProfilePage from './ProfilePage'
import '../styles.css'


export default function Routes() {
    return (
             <Router>
            <div>
              <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/login" component={Login} />
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/:id' component={ProfilePage}/>
              </Switch>  
            </div>
            </Router> 
    )
}

