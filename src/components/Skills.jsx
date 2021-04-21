import React from 'react'
import Tag from './Tag'
import data from './data'

const now = new Date().getFullYear()

class Skills extends React.Component {
  render() {
    const listItems = 
      data.skills
        .sort((a, b) => a.start - b.start)
        .map(d => {
          return (
            <li className="list__item skill" key={d.title}>
              <h3 className="skill__title">
                {d.title}
              </h3>
              <div className="skill__experience">
                {now - d.start} years
              </div>
            </li>
          )
        })

    return (
      <ul className="list--nostyle">{listItems}</ul>
    )
  }
}

export default Skills
