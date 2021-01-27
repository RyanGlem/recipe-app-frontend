import React, {Component} from 'react';

class SignIn extends Component{



    render () {
        return (
           <div>
               <form>
                    <label for = "username"><b>Username:</b></label> <br/>
                    <input type="text" id="username"/> <br/>
                    <label for = "password"><b>Password:</b></label> <br/>
                    <input type="password" id="password"/> <br/>
                    <input type= "Submit" value = "Sign in"/>
               </form>
            </div>
        )
    }
}

export default SignIn;