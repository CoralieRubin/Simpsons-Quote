import React from 'react';
import DisplaySimpsons from './components/DisplaySimpsons';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsons: null,
    };
    this.getSimpsons = this.getSimpsons.bind(this);
  }
  getSimpsons() {
    axios
      .get('https://quests.wilders.dev/simpsons-quotes/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          simpsons: data[0],
        });
      });
  }
  render() {
    console.log(this.state.simpsons);
    return (
      <div className="app">
        {this.state.simpsons ? (
          <DisplaySimpsons simpsons={this.state.simpsons} />
        ) : null}
        <button type="button" onClick={this.getSimpsons}>
          Get quote
        </button>
      </div>
    );
  }
}

export default App;
