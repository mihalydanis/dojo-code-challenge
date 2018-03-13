import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    heroes: []
  };

  componentDidMount() {
    fetch('/heroes')
      .then(res => res.json())
      .then(heroes => this.setState({ heroes }));
  }

  render() {
    return (
      <div className="App">
        <h1>Heroes</h1>
          {this.state.heroes.map(hero => {
            if (hero.attributes.image_card_background) {
              return (
                <div key={hero.id}>
                  <section style={{ backgroundImage: 'url(' + hero.attributes.image_card_background + ')'}}>
                      <img src={hero.attributes.image_portrait}></img>
                    <h3>{hero.attributes.name}</h3>
                  </section>
                </div> 
              )
            }
            return (
              <div key={hero.id}>
                <img src={hero.attributes.image_portrait}></img>
                <h3>{hero.attributes.name}</h3>
              </div>
            ) 
          })}
      </div>
    );
  }
};

export default App;
