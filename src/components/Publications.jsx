import React from 'react'
import Tag from './Tag'
import data from './data'

class Publications extends React.Component {
  render() {
    const listItems = 
      data.publications
        .sort((a, b) => a.year - b.year)
        .map(p => {
          return (
            <li className="list__item publication" key={p.project}>
              <h3 className="publication__project">
                {p.project}
              </h3>
              <a className="publication__link link" href={p.url} target="_blank">{p.url}</a>
              <div className="publication__year">{p.year}</div>
            </li>
          )
        })

    return (
      <ul className="list--nostyle">{listItems}</ul>
    )
  }
}

export default Publications
