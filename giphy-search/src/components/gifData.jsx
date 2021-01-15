import React, {Component} from 'react'
import GifDisplay from './gifDisplay'
import axios from 'axios'


class GifData extends Component {

    constructor (props) {

        super (props)
        this.state = {

            urls: [],
        }

        console.log(this.state.gifData)
    }

    componentDidMount () {

            fetch ('http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=AyuSIWGMSt6cQ5wox8Kp661mPyQzLONo')
            .then((response) => response.json())
            .then((response) => {this.setState({urls: response.data.map((elem) => {return (elem.images.original.url)})})})
            .catch ((error) => console.error(error))
         
      }

      render () { 
         {return (<div> <h4>All Trending Gifs</h4>{this.state.urls.map((elem, index) => {return (<div> <img src={elem} alt=""></img></div>)})}
         </div> )}
      }

      // {this.state.gifData.map((elem) => {return (<GifDisplay  images = {elem.images}/>)})}
      
}

export default GifData