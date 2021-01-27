import React, { Component } from 'react';
import UsersView from '../views/UsersView'
import HomeView from '../views/HomeView'
import { connect } from 'react-redux'
import {getUsers} from '../redux/reducers'
import 'bootstrap/dist/css/bootstrap.min.css'

import "./ComponentCSS/Home.css";

class HomeDisplay extends Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

  render() {
    return (
      <div>

      </div>
    );
  }
}

// Map state to props
const mapState = (state) => {
    return {
        users: state.users
    }
}

// Map dispatch to props
const mapDispatch = (dispatch) => {
    return {
        fetchUsers: () => dispatch(getUsers())
        
    }
}

export default connect(mapState, mapDispatch)(HomeDisplay);
