import React, { Component } from 'react';
import './FlipCard.css';

class FlipCardClass extends Component {
  state = { flipped: false };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ flipped: !prevState.flipped }));
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { flipped } = this.state;
    const { frontImage, backImage } = this.props;
    return (
      <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={frontImage} alt="Front" />
          </div>
          <div className="flip-card-back">
            <img src={backImage} alt="Back" />
          </div>
        </div>
      </div>
    );
  }
}

export default FlipCardClass;
