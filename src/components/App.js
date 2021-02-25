import React from 'react'
import '../App.css';
import Header from './Header'
import ResultContainer from './ResultContainer';
import Searchbox from './SearchBox';

const name = require('@rstacruz/startup-name-generator')

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      headerExpanded: true,
      suggestedNames: []
    };
  }

  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded: !(inputText),
      suggestedNames: inputText? name(inputText):[]
    });
  }

  render() {
  return (
    <div>
      <Header headerExpanded={this.state.headerExpanded}/>
      <Searchbox onInputChange = {this.handleInputChange}/>
      <ResultContainer suggestedNames={this.state.suggestedNames}></ResultContainer>
    </div>
  )
  }

}

export default App;
