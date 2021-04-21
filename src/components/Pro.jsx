import React from 'react'
import data from './data'

class Pro extends React.Component {
  render() {
    const listItems = 
      data.pro
        .map(p => {
          return (
            <li className="list__item" key={p.company}>
              <h3 className="pro__job">
                {p.job}
              </h3>
              <div className="pro__company">
                {p.company} - {p.location}
              </div>
              <div className="pro__period">
                From {p.start} to {p.end}
              </div>
            </li>
          )
        })

    return (
      <ul className="list--nostyle">{listItems}</ul>
    )
  }
}

export default Pro
