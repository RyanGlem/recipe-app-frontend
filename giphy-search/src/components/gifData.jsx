import React, {Component} from 'react'
import axios from 'axios'


class GifData extends Component {

    constructor (props) {

        super (props)
        this.state = {

            gifData: [],
            url: "",
        }

        this.state.src = [...this.state.gifData]
        console.log(this.state.gifData)
    }

    componentDidMount () {

            fetch ('http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=AyuSIWGMSt6cQ5wox8Kp661mPyQzLONo')
            .then((response) => response.json())
            .then((response) => {this.setState({gifData: response.data.map((elem) => {return (elem.images.original.url)})})})
            .catch ((error) => console.error(error))
         
      }

      render () { 
         {return (<div> <img src={(this.state.gifData)} alt =""></img> </div>)}
      }
      
}

export default GifData