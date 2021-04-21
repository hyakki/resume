import React from 'react'

class Tag extends React.Component {
  render() {
    return (
        <span className={`tag--${this.props.label}`}>
        {this.props.label}
      </span>
    )
  }
}

export default Tag