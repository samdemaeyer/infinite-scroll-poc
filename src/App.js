import React from 'react';
import Section from './components/Section';
import GenerateHexColor from './utils/GenerateHexColor';

class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      prevSections: [],
      sections: [
        <Section key={0} index={0} bgColor={GenerateHexColor()} />,
        <Section key={1} index={1} bgColor={GenerateHexColor()} />,
        <Section key={2} index={2} bgColor={GenerateHexColor()} />
      ]
    }
  }

  componentDidMount() {
    let lastPageYOffset = window.pageYOffset;

    window.addEventListener('scroll', () => {
      const scrollingUp = window.pageYOffset < lastPageYOffset;

      if (window.pageYOffset > window.innerHeight) {
        const newKey = this.state.sections[2].props.index + 1;
        const prevSection = this.state.sections.shift();
        this.setState({
          prevSections: [...this.state.prevSections, prevSection],
          sections: [
            ...this.state.sections,
            <Section key={newKey} index={newKey} bgColor={GenerateHexColor()} />
          ]
        });
      }

      if (scrollingUp && window.pageYOffset === 0 && this.state.prevSections.length) {
        this.state.sections.pop();
        this.setState({
          sections: [ this.state.prevSections.pop(), ...this.state.sections ]
        });
        window.scrollTo(0, window.innerHeight)
      }

      lastPageYOffset = window.pageYOffset;
    });
  }

  render() {
    return this.state.sections;
  }
}

export default App;
