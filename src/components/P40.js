import React, { Component } from "react";
import p_40_above from "../images/p-40_above.png";
import p_40_desc_above from "../images/p-40_desc_above.png";
import p_40_front from "../images/p-40_front.png";
import p_40_desc_front from "../images/p-40_desc_front.png";
import p_40_side from "../images/p-40_side.png";
import p_40_desc_side from "../images/p-40_desc_side.png";

export class P40 extends Component {
  state = {
    slideIndex: 0,
    showMore: false
  };
  slide = [
    {
      image: p_40_above,
      name: "above",
      more: true,
      slide: p_40_desc_above
    },
    {
      image: p_40_front,
      name: "front",
      more: true,
      slide: p_40_desc_front
    },
    {
      image: p_40_side,
      name: "side-left",
      more: true,
      slide: p_40_desc_side
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
        <h3>P40</h3>
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

export default P40;
