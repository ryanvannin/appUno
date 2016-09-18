import React, { Component } from 'react';
import StarWidget from './StarWidget';
import './App.css';

// https://raw.githubusercontent.com/ryanvannin/appUno/create-react-fetch-test/initialdata.json

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
    //this.state = {   
      //isOnOver: props.initialIsOnOver,
     // qty: props.initialQty,
      //rate: props.initialRate,
     // tempRate: props.initialTempRate,
    //};
    this.changeRate = this.changeRate.bind(this);
  }

  loadComments () {
    console.log(this.props.url);
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
      .catch(err => console.error(this.props.url, err.toString()))
  }

  componentDidMount () {
    this.loadComments()
    setInterval(() => this.loadComments.bind(this), this.props.pollInterval)
  }

  changeRate(action, rate) {
    let isOnOver; 
    let tempRate;

    switch(action) {
      case 'change':
        isOnOver = false;
        tempRate = rate;
        break;
      case 'show':
        isOnOver = true;
        tempRate = this.state.rate;
        break;
      case 'reset':
        isOnOver = false;
        rate = this.state.tempRate;
        break;
      default :
        return;
    }

    this.setState({
     isOnOver,
     rate, 
     tempRate,
    });
  }

  render() {
    return (
      <StarWidget 
        url="https://raw.githubusercontent.com/ryanvannin/appUno/create-react-fetch-test/initialdata.json" 
        pollInterval={2000}
        changeRate={ this.changeRate } 
        isOnOver={ this.state.isOnOver }
        qty={ this.state.qty }  
        rate={ this.state.rate }
      />
    );
  }
}

App.propTypes = {
  initialIsOnOver: React.PropTypes.bool,
  initialQty: React.PropTypes.number,
  initialRate: React.PropTypes.number,
  initialTempRate: React.PropTypes.number,
}

App.defaultProps = {
  initialIsOnOver: false,
  initialQty: 20,
  initialRate: 10,
  initialTempRate: 0,
}

export default App;