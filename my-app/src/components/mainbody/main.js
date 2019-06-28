import './main.css'
import React, { Component } from 'react'
import images from './imgs'


class Container extends Component {

    // state = {
    //     uploading: false,
    //     images: []

    //     }
    // }
    render() {
        return (
            <>
                <div className="imgsDiv">
                    <img src={window.location.origin + '/imgs/pusheen1.jpg'} />
                </div>
            </>
        )
    }
}

export default Container