import React, { Component } from 'react';
import StarWidget from './StarWidget';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnOver: false,
      qty: props.initialQty,
      rate: props.initialRate,
      tempRate: props.initialTempRate,
    };
    this.changeRate = this.changeRate.bind(this);
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
        changeRate={ this.changeRate } 
        isOnOver={ this.state.isOnOver }
        qty={ this.state.qty }  
        rate={ this.state.rate }
      />
    );
  }
}

App.propTypes = {
  initialQty: React.PropTypes.number,
  initialRate: React.PropTypes.number,
  initialTempRate: React.PropTypes.number,
}

App.defaultProps = {
  initialQty: 20,
  initialRate: 10,
  initialTempRate: 0,
}

export default App;