import React from 'react';
import Section from './components/Section';
import GenerateHexColor from './utils/GenerateHexColor';
import './App.css';

class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      sections: [
        <Section key={0} backgroundColor={GenerateHexColor()} />,
        <Section key={1} backgroundColor={GenerateHexColor()} />,
        <Section key={2} backgroundColor={GenerateHexColor()} />
      ]
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > window.innerHeight) {
        const newKey = Number(this.state.sections[2].key) + 1;
        this.state.sections.shift();
        this.setState({
          sections: [...this.state.sections, <Section key={newKey} backgroundColor={GenerateHexColor()} />]
        });
      }
    });
  }

  render() {
    return this.state.sections;
  }
}

export default App;
