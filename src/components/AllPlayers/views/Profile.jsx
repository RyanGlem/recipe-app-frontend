import React,{Component} from "react";

class Profile extends Component {



    render () {
        return(
            <div>
                <table className = "profileInfo"> 
                    <tr>
                        <td> <img className="pfp" src="https://cdn.hpm.io/wp-content/uploads/2018/05/24135313/Morgan-Freeman.jpg"/></td>
                        <td className="userDescription"> Username: "MorganTheMan" <br/> 
                            Skill level: Professional  <br/>  
                             Bio :When I was a teenager, I began to settle into school because I'd discovered the extracurricular activities that interested me: music and theater.    
                        </td>
                    </tr>
                    <br/>
                    <br/>
                    <br/>
                    <tr>
                        <td><b>MorganTheMans Favorite Recipes: </b></td>
                    </tr>

                </table>
            </div>

        )
    }
}

export default Profile;