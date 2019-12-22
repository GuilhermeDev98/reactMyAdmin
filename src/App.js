import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import Routes from './Routes'

const App = props => 
    <div className="container">
        <Provider store={store}>
            <Routes/>
        </Provider>
    </div>


export default App;