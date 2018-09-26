import React from 'react'

const RouteHome = ({ article }) => (
  <li className="imgArt" key={article.id}>
    <img alt="event" src={article.image} />
    {article.title}
  </li>
)

export default RouteHome
