import React, { Component } from "react";
import b_25_above from "../images/b-25_above.png";
import b_25_desc_side from "../images/b-25_desc_side.png";
import b_25_desc_top from "../images/b-25_desc_top.png";
import b_25_front from "../images/b-25_front.png";
import b_25_side_left from "../images/b-25_side_left.png";
import b_25_side_right from "../images/b-25_side_right.png";

export class B25 extends Component {
  state = {
    slideIndex: 0,
    showMore: false
  };

  slide = [
    {
      image: b_25_above,
      name: "above",
      more: true,
      slide: b_25_desc_top
    },
    {
      image: b_25_front,
      name: "front",
      more: false
    },
    {
      image: b_25_side_left,
      name: "side-left",
      more: true,
      slide: b_25_desc_side
    },
    {
      image: b_25_side_right,
      name: "side-right",
      more: true,
      slide: b_25_desc_side
    }
  ];

  handleSlide() {
    this.setState({
      showMore: false
    });
    let currentIndex = this.state.slideIndex;
    if (currentIndex + 1 > this.slide.length - 1) {
      this.setState({
        slideIndex: 0
      });
    } else {
      this.setState({
        slideIndex: this.state.slideIndex + 1
      });
    }
  }

  handleOther() {
    this.setState({
      showMore: true
    });
  }

  render() {
    return (
      <div className="d-flex flex-column justify-content-center">
        <h3>B25</h3>
        <div className="d-flex flex-row justify-content-center">
          <button
            className="btn btn-primary btn-sm w-25"
            onClick={this.handleSlide.bind(this)}
          >
            Slide Gesture
          </button>

          {this.slide[this.state.slideIndex].more ? (
            <button
              className="btn btn-danger btn-sm w-25"
              onClick={this.handleOther.bind(this)}
            >
              Other Gesture
            </button>
          ) : (
            ""
          )}
        </div>

        <div className="w-50">
          {this.state.showMore ? (
            <img src={this.slide[this.state.slideIndex].slide} />
          ) : (
            <img src={this.slide[this.state.slideIndex].image} alt="" />
          )}
        </div>
      </div>
    );
  }
}

export default B25;
