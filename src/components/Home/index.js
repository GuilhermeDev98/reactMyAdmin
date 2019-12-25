import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {login} from '../../store/Actions/Auth'

import Login from '../Login'
import Databases from '../Databases'

const Home = props => {
    if(!props.auth.logged){
        return (
            <Login />
        )
    }else{
        return (
            <Databases />
        )
    }
}

const mapStateToProps = ({auth}) => ({ auth})
const mapDispatchToProps = dispatch => bindActionCreators({login}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)