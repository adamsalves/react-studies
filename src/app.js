'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: 'Adams'
    }
  }

  render () {
    return (
      <div className='container' onClick={() => this.setState({
        text: 'Outro Texto'
      })}>
        {this.state.text}
      </div>
    )
  }
}
export default App
