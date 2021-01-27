import React, { Component } from 'react';
import Recipeview from '../views/RecipeView';

class RecipeContainer extends Component {
    constructor(props) {
        super(props)
    }


    render () {
        console.log("Youre in Recipe Container")
        return(
            <div className = "Recipes">
             <Recipeview/>
            </div>
        )
    }


}

export default RecipeContainer;