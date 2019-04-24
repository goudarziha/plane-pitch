import React, { Component } from "react";
import p_47_above from "../images/p-27_top.png";
import p_47_front from "../images/p-27_front.png";
import p_47_desc_front from "../images/p-47_desc_front.png";
import p_47_desc_side from "../images/p-47_desc_side.jpg";
import p_47_desc_top from "../images/p-47_desc_top.png";
import p_47_side from "../images/p-47_side.png";

export class P47 extends Component {
  state = {
    slideIndex: 0,
    showMore: false
  };

  slide = [
    {
      image: p_47_above,
      name: "above",
      more: true,
      slide: p_47_desc_top
    },
    {
      image: p_47_front,
      name: "front",
      more: true,
      slide: p_47_desc_front
    },
    {
      image: p_47_side,
      name: "side-left",
      more: true,
      slide: p_47_desc_side
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
        <h1>P47</h1>
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

export default P47;
