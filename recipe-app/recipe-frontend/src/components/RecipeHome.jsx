import React, { Component } from 'react';
import UsersView from '../views/UsersView'
import HomeView from '../views/HomeView'
import RecipesView from '../views/RecipesView'
import { connect } from 'react-redux'
import {getUsers, getRecipes} from '../redux/reducers'
import 'bootstrap/dist/css/bootstrap.min.css'

import "./ComponentCSS/Home.css";

class HomeDisplay extends Component {

    componentDidMount() {
        this.props.fetchUsers()
        this.props.getRecipes()
    }

  render() {
    return (
      <div>
        {<RecipesView recipes={this.props.recipes}/>}
        {console.log (this.props.recipes)}

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
        getRecipes: () => dispatch(getRecipes())
        
    }
}

export default connect(mapState, mapDispatch)(HomeDisplay);
