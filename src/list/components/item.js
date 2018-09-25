import React, { Component } from 'react'

class Item extends Component {
  handleOnCLick(e) {
    alert(e.currentTarget.textContent)
  }

  render() {
    const { name, age } = this.props
    return (<li onClick={e => this.handleOnCLick(e)}>{`${name} ${age}`}</li>)
  }
}

export default Item
