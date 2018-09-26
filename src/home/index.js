import axios from 'axios'
// import myHeader from '../header'
import React, { Component } from 'react'
import RouteHome from './components/routeHome.js'
// import Search from '../search'
// import Home from 'home'
import '../index.scss'

class Home extends Component {
  constructor() {
    super()
    const initialState = {
      data: []
    }

    this.state = initialState
  }

  componentDidMount() {
    this.getData()
  }
  /**
   * Get data
   * @return {Object} dataFormatted
   */

  getData() {
    const apiUrl = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=evenements-a-paris&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info'

    axios.get(apiUrl)
      .then((response) => {
        this.state.data = this.formatEvents(response.data.records)

        this.setState({
          data: this.formatEvents(response.data.records)
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  /**
   * Format events
   * @param {Array} events
   * @return {Array} eventsFormatted
   */
  formatEvents(events) {
    return events.map(event => ({
      id: event.recordid,
      address: event.fields.address,
      city: event.fields.city,
      dateEnd: event.fields.date_end,
      dateStart: event.fields.date_start,
      description: event.fields.description,
      image: event.fields.image,
      title: event.fields.title
    }))
  }

  render() {
    const { data } = this.state

    console.log(data)

    return (
      <div>
        <h1>Voici 10 events</h1>
        <ul className="ulArt">
          {
            data.map(
              article => <RouteHome key={article.id} article={article} />
            )
          }
        </ul>
      </div>
    )
  }
}

export default Home
