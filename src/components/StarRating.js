/* =============== Dependencies ============ */
import React, { useState, useEffect, Component } from "react";
/* ========== Redux ============= */
import { connect } from "react-redux";
import { editBook } from "../store/actionCreators";
import getVisibleBooks from "../store/selectors";
/* ============= Components =============== */
import Star from "./Star";

/* =============== Code ================= */
class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.bookId,
      rating: props.bookRating,
    };
  }
  renderStarRating = () => {
    let stars = [];
    let maxRating = 10;

    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <Star
          isSelected={this.state.rating > i}
          handleStarRating={() => this.handleSetRating(i + 1)}
          key={i}
          star={this.props.star}
          selected={this.props.selected}
          stroke={this.props.stroke}
          strokeWidth={this.props.strokeWidth}
        />
      );
    }
    return stars;
  };

  //setRating = {() => this.handleSetRating(i + 1)}
  //setRating = { this.props.handleStarRating((i + 1), this.state.rating, this.state.id) }

  handleSetRating = (rating) => {
    if (this.state.rating === rating) {
      this.setState({ rating: 0 });
    } else {
      this.setState({ rating });
      this.setState(() =>
        this.props.dispatch(editBook(this.state.id, { rating }))
      );
    }
  };
  render() {
    return (
      <div className="star-rating">
        {/* Render the Star components */}
        <ul className={this.props.starRatingUl}>{this.renderStarRating()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: getVisibleBooks(state.books, state.filters),
  };
};
export default connect(mapStateToProps)(StarRating);

//export default StarRating;

// const StarRating = (props) => {
//   const [bookId, setBookId] = useState(props.bookId);
//   const [bookRating, setRating] = useState(props.bookRating);

//   // useEffect(() => {
//   //   setRating();
//   // }, [props.bookRating]);

//   const renderStarRating = () => {
//     let stars = [];
//     let maxRating = 10;

//     for (let i = 0; i < maxRating; i++) {
//       stars.push(
//         <Star
//           isSelected={bookRating > i}
//           handleStarRating={() => handleSetRating(i + 1)}
//           key={i}
//           star={props.star}
//           selected={props.selected}
//           stroke={props.stroke}
//           strokeWidth={props.strokeWidth}
//         />
//       );
//     }
//     return stars;
//   };

//   function handleSetRating(rating) {
//     if (bookRating === rating) {
//       setRating(0);
//     } else {
//       setRating(bookRating);
//       // setRating(() => props.dispatch(editBook(bookId, { bookRating })));
//     }
//   }
//   return (
//     <div className="star-rating">
//       {/* Render the Star components */}
//       <ul className={props.starRatingUl}>{renderStarRating()}</ul>
//     </div>
//   );
// };
