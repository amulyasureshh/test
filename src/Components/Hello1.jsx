import React from 'react';

class Hello1 extends React.Component {
  render() {
    const { language } = this.props;
    let greeting;

    if (language === 'french') {
      greeting = <strong>Bonjour</strong>;
    } else {
      greeting = 'Hello';
    }

    return <h2>{greeting}</h2>;
  }
}

export default Hello1;