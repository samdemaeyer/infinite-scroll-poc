import React from 'react';
import './Section.css';

class Section extends React.Component {
  render() {
    return (
      <section style={{backgroundColor: this.props.bgColor}} id={this.props.index}>
        <h1>{this.props.index}</h1>
        <small>Background color: <code>{this.props.bgColor}</code></small>
      </section>
    )
  }
}

export default Section;
