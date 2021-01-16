import React, {Component} from 'react'
import GifDisplay from './gifDisplay'
import axios from 'axios'


class GifSearch extends Component {

    constructor (props) {

        super (props)
        this.state = {
            
            searchTerm: "",
            urls: [],
            match: false
        }

        console.log (this.state.urls)
    }

    componentDidMount () {
      
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=AyuSIWGMSt6cQ5wox8Kp661mPyQzLONo`)
        .then((response) => response.json())
        .then((response) => {this.setState({urls: response.data})})
        .catch ((error) => console.error(error))
      } 

   gifSearch = () => {

        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=AyuSIWGMSt6cQ5wox8Kp661mPyQzLONo`)
        .then((response) => response.json())
        .then((response) => {this.setState({urls: response.data})})
        .catch ((error) => console.error(error))
   }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value 
        })
    }



    render () { return (<div> <input
                                type="text"
                                onChange={this.handleChange}
                                value= {this.state.searchTerm}>
                                </input>
                                <button onClick={this.gifSearch} >Search</button>
        {this.state.urls.map((elem, index) => {return (<GifDisplay key={index} url = {elem.images.original.url}/>)})} </div>)

    
    }

}



export default GifSearch