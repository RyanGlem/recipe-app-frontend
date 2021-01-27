import React from 'react' 
import {Button, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export const RecipesView = props => {

    return (
        <Table>
            <tbody>
            <td> 
        <div>
            <img src ="https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg" alt=""></img>
        </div>
        </td>
                <tr>
                    <td> Description </td>
                </tr>
                <tr>
                    <td> Share Button </td>
                </tr>
                <tr>
                    <td> Favorite Button</td>

                </tr>
                </tbody>
        
        </Table>
    )
}

export default RecipesView