import React from 'react';

export default class App extends React.Component {
  render() {
    const animais = [
      "Cachorro",
      "Gato",
      "Peixe"
    ];

    return (
      <div>
        <h1>Lista de animais:</h1>
        <ul>
          {
            animais.map(animal => {
              return <li>{animal}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}