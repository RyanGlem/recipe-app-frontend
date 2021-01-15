import React, {Component} from 'react'
import axios from 'axios'


class GifData extends Component {

    constructor (props) {

        super (props)
        this.state = {

            gifData: [],
            src: {},
        }

        this.state.src = [...this.state.gifData]
        {console.log(this.state.gifData.url)}
    }

    async componentDidMount () {

        try {
          let gifData = await axios.get (
              'http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=AyuSIWGMSt6cQ5wox8Kp661mPyQzLONo'
          )
          this.setState ({gifData: gifData.data})
          console.log (this.state.gifData)
      } catch (error) {
          console.error(error)
        }
      }

      render () {
          return (<div>gifs</div>)
      }
      
}

export default GifData