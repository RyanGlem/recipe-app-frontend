import React,{Component} from 'react';

class SignUp extends Component {



    render() {
        return(
            <div>
               <form>   
                    <label for = "username"><b>Username</b></label> <br/>
                    <input type="text" id="username"/> <br/>
                    <label for = "password"><b>Password:</b></label> <br/>
                    <input type="password" id="password"/> <br/>

                    <label for="fName"><b>First Name:</b></label> <br/>
                    <input type = "text" id = "fName"/> <br/>
                    <label for="lName"><b>Last Name:</b></label> <br/>
                    <input type = "text" id = "lName"/> <br/>
                    <label for="img"><b>Select an image for your profile picture:</b></label>
                    <input type="file" id="img" name="img" accept="image/*"/> <br/>
                   
                    <b>Select your level of skill</b> <br/>
                    <label for="Pro"><b>Professional</b></label>
                    <input type="radio" name="skill" id="pro" value="Professional"/><br/>
                    <label for="mid"><b>Intermediate</b></label>
                    <input type="radio" name = "skill" id="mid" value="Intermediate"/><br/>
                    <label for="new"><b>Beginner</b></label>
                    <input type="radio" name="skill" id="new" value="Beginner"/><br/>
                   

                    <label for="bio"><b>Bio:</b></label> <br/>
                    <textarea id = "bio" rows="8"cols="50"/> <br/>
                    <input type= "Submit" value = "Sign in"/>
               </form>
            </div>
        )
    }



}

export default SignUp;