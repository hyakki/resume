import React from 'react'
import moment from 'moment'

class Summary extends React.Component {
  render() {
    const age = moment().diff('1986-04-21', 'years')

    return (
      <>
        <p>
          I'm Maxime, also known under the nickname "hyakki".<br />
          I'm a {age} years old belgian creative developer. Born in Charleroi and currently living near Brussels.<br />
        </p>
      </>
    )
  }
}

export default Summary
