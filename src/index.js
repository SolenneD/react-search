import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Header from './header'
import Search from './search'
import Home from './home'
import './index.scss'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div>
            <Route path="/" component={Home} exact />
            <Route path="/search" component={Search} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('index'))
