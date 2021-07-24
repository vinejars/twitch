import * as React from 'react'
import {Route, Switch } from 'react-router-dom'
import Main from './Main'
import '../styles.css'




export default class Routes extends React.Component {
    render() {
        return (
            <div>
              <Switch>
              <Route exact path="/" component={Main} />
              </Switch>  
            </div>
        )
    }
}
