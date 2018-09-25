import React, { Component } from 'react'

class Result extends Component {
  render() {
    const { nomEvent } = this.props
    return (
      <ul>
        { nomEvent.map(event => <li key={event.title}>{event.title}</li>)}
      </ul>
    )
  }
}

export default Result
