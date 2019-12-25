const INITIAL_STATE = {
    host     : 'localhost',
    user     : 'root',
    password : 'secret',
    database : 'my_db',
    logged: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, ...action.payload}
        case 'LOGOUT':
            return {...state, logged: false}
        default:
            return state
    }
}