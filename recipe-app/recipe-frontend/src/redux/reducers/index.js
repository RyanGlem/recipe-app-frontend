import axios from 'axios'


// Action Types
const GOT_USERS = 'GOT_USERS'
const GOT_RECIPES = 'GOT_RECIPES'


//Initial state
const init = {
    users: [],
    recipes: [],
}

// Action Creatures
const gotUsers = (data) => ({
    type: GOT_USERS,
    data,
})

const gotRecipes = (data) => ({
    type: GOT_RECIPES,
    data,
})

// Thunks unwraps functions and returns objects (Middleware)
export const getUsers = () => {
    return async (dispatch) => {
        try {
            
            const response = await axios.get('http://localhost:8080/users/')
            dispatch (gotUsers(response.data.users))
            console.log (response.data.users)
        } catch (error) {
            console.error(error)
    
        }
    }
}

export const getRecipes = () => {
    var options = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
        params: {query: 'steak', number: '10', offset: '0', type: 'main course'},
        headers: {
          'x-rapidapi-key': process.env.API_KEY,
          'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      };
    return async (dispatch) => {
        try {
            await axios.request(options).then(function (response) {
                dispatch (gotRecipes(response.data))})
        } catch (error) {
            console.error(error)
        }
    }
}

const rootReducer = (state = init, action) => {
    switch (action.type) {
        case GOT_USERS:
            return {...state, users: action.data}
        case GOT_RECIPES:
            return {...state, recipes: action.data}
        default:
            return state;
    }
}

export default rootReducer;