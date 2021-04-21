import React from 'react'
import data from './data'

class Info extends React.Component {
  render() {
    const listItems =
      data.infos
        .map(i => {
          return (
            <li className="list__item" key={i}>
              {i}
            </li>
          )
        })

    return (
      <ul className="list">{listItems}</ul>
    )
  }
}

export default Info
