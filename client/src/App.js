import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      where: null,
    }
  }

  componentDidMount() {
    fetch('http://localhost:1234')
      .then(response => response.json())
      .then(data => { console.log(data); this.setState({ where: data.where }) });
  }

  render() {
    let { where }= this.state;

    if (!where) {
      where = 'Adamah';
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello {where}.
          </p>
          <p>
            <img src='https://ik.imagekit.io/reddiky/reddiky/images/logo.png' className="App-logo" alt="logo" />
          </p>
        </header>
      </div>
    )
  }
}

export default App;
