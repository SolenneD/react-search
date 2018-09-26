import React from 'react'

const Result = ({ data }) => (
  <ul>
    {data.map(item => <li key={item.id}>{item.title}</li>)}
  </ul>
)

export default Result
