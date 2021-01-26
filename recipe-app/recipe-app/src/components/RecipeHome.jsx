import React, { Component } from 'react';
import UsersView from './UsersView'
import { connect } from 'react-redux'
import {getUsers} from '../redux/reducers'

import "./ComponentCSS/Home.css";

class HomeDisplay extends Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

  render() {
    return (
      <div>
        <UsersView users={this.props.users} key={this.props.id}/>
        <button className="LoginComponent"> Login </button>
        <button className="CreateRecipe"> Create Recipe </button>
        <h3>Welcome</h3>
        <div>
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=400:*"
            alt="image1"
          ></img>
          <img
            src="https://sugargeekshow.com/wp-content/uploads/2019/10/chocolate-chip-muffins-featured.jpg"
            alt="image2"
            width="400"
            height="400"
          ></img>
          <img
            src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_300,ar_1:1/k%2Farchive%2Fe3ce4eb1741bd76cc083424453c0e3f39d147f9b"
            alt="image3"
          ></img>
        </div>
        <div>
          <h3> Popular Recipes</h3>
        </div>
        <div>
          <h3> New Recipes </h3>
        </div>
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
