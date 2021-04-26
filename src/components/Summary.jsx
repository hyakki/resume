import React from 'react'
import moment from 'moment'

class Summary extends React.Component {
  render() {
    const age = moment().diff('1986-04-21', 'years')

    return (
      <div className="max-width-print">
        <p>
          I'm Maxime, also known under the nickname "hyakki".<br />
          I'm a {age} years old belgian creative developer. Born in Charleroi and currently living near Brussels.<br />
        </p>
        <p>
          I've' always been passionate about graphics and coding. I was already drawing as a child and I got my first v-tech laptop at a very young age where I had to code my own games before I could play them. I had the chance to turn these two passions into my job, although I'm now fully dedicated to web development.
        </p>
        <p>
          I've worked for many companies, clients and brands to satisfy their needs and deliver the best product/service to their end-users.
        </p>
      </div>
    )
  }
}

export default Summary
