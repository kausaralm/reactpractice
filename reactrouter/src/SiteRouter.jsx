import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'

import {BrowserRouter, Switch, Route} from 'react-router-dom'


export default class SiteRouter extends Component {
    render() {
        return (
            <BrowserRouter>
             <Switch>
                 <Route exact path="/" component={Home} />
                 <Route exact path="/about" component={About} />
                 <Route exact path="/contact" component={Contact} />
             </Switch>
            </BrowserRouter>
        )
    }
}
