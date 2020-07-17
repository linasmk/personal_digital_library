/* =============== Dependencies ============ */
import React, { Component } from "react";
/* ========== Redux ============= */
import { connect } from "react-redux";
import getVisibleBooks from "../store/selectors";
/* ============= Components =============== */
import Star from "./Star";

/* =============== Code ================= */
class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      // rating: props.book ? props.book.rating : 0,
    };
  }
  renderStarRating = () => {
    let stars = [];
    let maxRating = 10;

    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <Star
          isSelected={this.state.rating > i}
          setRating={() => this.handleSetRating(i + 1)}
          key={i}
        />
      );
    }
    return stars;
  };
  handleSetRating = (rating) => {
    if (this.state.rating === rating) {
      this.setState({ rating: 0 });
    } else {
      this.setState({ rating });
    }
  };
  render() {
    return (
      <ul className="book__stars">
        {/* Render the Star components */}
        {this.renderStarRating()}
      </ul>
    );
  }
}
// const mapStateToProps = (state, props) => {
//   return {
//     book: state.books.find((book) => book.id === props.id),
//   };
// };
// export default connect(mapStateToProps)(StarRating);
export default StarRating;
