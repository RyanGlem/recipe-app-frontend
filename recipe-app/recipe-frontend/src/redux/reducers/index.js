import axios from 'axios'


// Action Types

const GOT_USERS = 'GOT_USERS'


//Initial state
const init = {
    users:[]
}

// Action Creatures
const gotUsers = (data) => ({
    type: GOT_USERS,
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

const rootReducer = (state = init, action) => {
    switch (action.type) {
        case GOT_USERS:
            return {...state, users: action.data}
        default:
            return state;
    }
}

export default rootReducer;