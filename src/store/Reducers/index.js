import {combineReducers} from 'redux'

import Auth from './Auth'
import Databases from './Databases'

const reducers = combineReducers({
    auth: Auth,
    databases: Databases
})

export default reducers