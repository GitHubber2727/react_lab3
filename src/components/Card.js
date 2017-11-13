import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlipButton from './FlipButton';

class Card extends Component {

  render() {
    if (this.props.flipped) {
      return <CardFlipped cardFace={this.props.card.cardFace} />
    } else {
      return <CardUnflipped onClick={this.props.onClick} />
    }
    }
//     return (
//       <div className="Card">
//         {this.props.text}
//       </div>
//     );
//   }
// }

function mapStateToProps(state) {
  const card = state.cards[state.currentCardIndex];
  let cardText;
  if (state.isFront) {
    cardText = card.front;
  } else {
    cardText = card.back;
  }

  return {
    text: cardText,
    flipped: state.isFront 
  };
}

export default connect(mapStateToProps)(Card);
