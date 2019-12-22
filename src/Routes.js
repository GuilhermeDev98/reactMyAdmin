import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Error404 from './components/Errors/404'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="*" component={Error404} />
        </Switch>
    </BrowserRouter>
)

export default Routes