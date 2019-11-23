import React, {Component} from 'react';
import Test from './Test'

class App extends Component {
  constructor() {
    super()
    this.state = {
      personClicks: 0
    }
    this.personClicked = this.personClicked.bind(this)
  }


  personClicked() {
    this.setState({personClicks: this.state.personClicks + 1})
  }

  render() {
    return (
      <div className="App">
        <Test person="Mallory" personClicked={this.personClicked}/>
        Person Clicks: {this.state.personClicks}
      </div>
    )
  }
}

export default App;
