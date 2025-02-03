import React from 'react';

class Hello2 extends React.Component {
  render() {
    const { language } = this.props;
    let greeting;

    if (language === 'french') {
      greeting = <strong>Bonjour</strong>;
    } else if (language === 'spanish') {
      greeting = <strong>Hola</strong>;
    } else {
      greeting = <strong>Hello</strong>;
    }

    return (
      <h2>{greeting}</h2>
    );
  }
}

export default Hello2;
