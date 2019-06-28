import React, { Component } from 'react'
import Header from './components/header/header.js'
import Container from './components/mainbody/main.js'

// I don't know why my pathways for getting my images aren't working, I found below code on stack overflow to try
// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//   return images;
// }

// const images = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));


let yourScore = 0;
let bestScore = 0;

class App extends Component {
  state = {
    yourScore: 0,
    bestScore: 0
  }

 
correctScore = (num) => {
  if (num) {
    if (this.yourScore + 1 > this.bestScore) {(
      score: this.yourScore + 1,
      bestScore: this.bestScore + 1)
    }
  } else {
    this. ({
      score: +1
    })
  }
}

  
  
  render() {
    return (
      <>
        <Header yourScore={this.state.yourScore} bestScore={this.state.bestScore}></Header>
        <Container></Container>
        
      </>
    )
  }
}

export default App

