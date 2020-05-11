import React from 'react';
import './Section.css';

class Section extends React.Component {
  render() {
    return (
      <section style={{backgroundColor: this.props.backgroundColor}}>
        <h1>Background color: {this.props.backgroundColor}</h1>
      </section>
    )
  }
}

export default Section;
