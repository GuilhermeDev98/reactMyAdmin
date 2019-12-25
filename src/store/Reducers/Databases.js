const INITIAL_STATE = ['database1', 'database2']

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_DATABASES':
            return {...state, ...action.payload}
        default:
            return state
    }
}