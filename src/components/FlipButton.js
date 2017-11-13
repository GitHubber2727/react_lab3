import React, { Component } from 'react';
import { connect } from 'react-redux';
import { flip } from '../actions';
import { Card } from './Card';

class FlipButton extends Component {
  render () {
    return (
      <button onClick={this.props.flip} className="FlipButton">
        Flip
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

const mapActionsToProps = {
  flip: flip
};

export default connect(mapStateToProps, mapActionsToProps)(FlipButton);
