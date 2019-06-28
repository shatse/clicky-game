import React, { Component } from 'react'
import Header from './components/header/header.js'
import Container from './components/mainbody/main.js'

let yourScore = 0;
let bestScore = 0;

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Container></Container>
        
      </>
    )
  }
}

export default App

