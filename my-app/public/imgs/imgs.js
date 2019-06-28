import './imgs.css'
import React, {Component} from 'react'

class imgs extends Component {
    _ = () => {
        this.props.selected(this.props.name)
    }
    render () {
        const { name } =this.props.name
        return (
        <>
            <img src={source} className='imgs' id={name} />
        </>
        )
    }
}

export default imgs