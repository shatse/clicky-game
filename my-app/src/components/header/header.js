import './header.css'
import React, { Component } from 'react'

class Header extends Component {
    render () {
        return (
            <>
            <div className="HeaderBig">
                <h1 className="clickOn">Pusheen says, Click Me!</h1>
                <h2 className="Score">Score : {this.props.yourScore}</h2>
                <h2 className="bestScore">Best Score : {this.props.bestScore}</h2>
            </div>

            </>
        )
    }
}

export default Header