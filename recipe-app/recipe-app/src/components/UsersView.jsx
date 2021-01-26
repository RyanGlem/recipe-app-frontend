import React from 'react'

const UsersView = props => {
    return (
        <div className="users">
            {props.users.map (user => (
                <div>
                <h1>{user.firstName}</h1> 
                </div>
            ))}
        </div>
    )
}

export default UsersView