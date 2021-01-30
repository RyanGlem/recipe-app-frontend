import React, { Component } from 'react';
import UsersView from '../views/UsersView'
import HomeView from '../views/HomeView'
import { connect } from 'react-redux'
import {getUsers, getRecipes} from '../redux/reducers'
import 'bootstrap/dist/css/bootstrap.min.css'

import "./ComponentCSS/Home.css";

class HomeDisplay extends Component {

    componentDidMount() {
        //this.props.fetchUsers()
        //this.props.fetchRecipes()
    }

  render() {
    return (
      <div>
        {/*this.props.recipes.results.map (elem => (<div> {elem.title} </div>)) */}

      </div>
    );
  }
}

// Map state to props
const mapState = (state) => {
    return {
        users: state.users,
        recipes: state.recipes
    }
}

// Map dispatch to props
const mapDispatch = (dispatch) => {
    return {
        fetchUsers: () => dispatch(getUsers()),
        fetchRecipes: () => dispatch(getRecipes())
        
    }
}

export default connect(mapState, mapDispatch)(HomeDisplay);
