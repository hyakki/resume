import React from 'react'
import data from './data'

class Languages extends React.Component {
  render() {
    const listItems = 
      data.languages
        .map(l => {
          return (
            <li className="list-item" key={l.name}>
              {l.name} - {l.level}
            </li>
          )
        })

    return (
      <ul className="list">{listItems}</ul>
    )
  }
}

export default Languages
