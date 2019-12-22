import {combineReducers} from 'redux'

const reducers = combineReducers({
    databases: () => (['database1', 'database2'])
})

export default reducers