import React from 'react'

class Section extends React.Component {
  render() {
    const title = this.props.title != null ? <h2>{this.props.title}</h2> : null

    return (
      <section className="section">
        {title}
        {this.props.children}
      </section>
    )
  }
}

export default Section
