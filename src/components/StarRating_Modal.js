import React, { Component } from "react";
import StarModal from "./Star_Modal";

class StarRatingModal extends Component {
  state = {
    rating: 0
  };
  renderStarRating = () => {
    let stars = [];
    let maxRating = 10;
    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <StarModal
          isSelected={this.state.rating > i}
          setRating={() => this.handleSetRating(i + 1)}
          key={i}
        />
      );
    }
    return stars;
  };
  handleSetRating = rating => {
    if (this.state.rating === rating) {
      this.setState({ rating: 0 });
    } else {
      this.setState({ rating });
    }
  };
  render() {
    return (
      <ul className="book__stars-modal">
        {/* Render the Star components */}
        {this.renderStarRating()}
      </ul>
    );
  }
}
export default StarRatingModal;
