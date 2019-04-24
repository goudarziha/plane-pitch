import React, { Component } from "react";
import b_24_top from "../images/b-24_top.png";
import b_24_front from "../images/b-24_front.png";
import b_24_desc_front from "../images/b-24_desc_front.png";
import b_24_desc_side from "../images/b-24_desc_side.png";
import b_24_desc_top from "../images/b-24_desc_top.png";

export class B24 extends Component {
  state = {
    slideIndex: 0,
    showMore: false
  };

  slide = [
    {
      image: b_24_top,
      name: "above",
      more: true,
      slide: b_24_desc_top
    },
    {
      image: b_24_front,
      name: "front",
      more: true,
      slide: b_24_desc_front
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
      <div>
        <h1>B24</h1>
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

        {this.state.showMore ? (
          <img src={this.slide[this.state.slideIndex].slide} />
        ) : (
          <img src={this.slide[this.state.slideIndex].image} alt="" />
        )}
      </div>
    );
  }
}

export default B24;
