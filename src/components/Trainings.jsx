import React from 'react'
import data from './data'

class Trainings extends React.Component {
  render() {
    const listItems = 
      data.trainings
        .map(p => {
          return (
            <li className="list__item" key={p.place}>
              <h3 className="training__title">
                {p.title}, {p.type}
              </h3>
              <div className="training__place">
                {p.place} - {p.location}
              </div>
              <div className="training__period">
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

export default Trainings
