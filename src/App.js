import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.colorsArr = ["yellow", "purple", "green", "blue"];

    class Info {
      constructor(institution, role, img) {
        this.institution = institution;
        this.role = role;
        this.img = img
      }
    }
    this.columbia = new Info("Columbia Engineering Coding Bootcamp", "Course Assistant", "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Columbia_Engineering_logo.svg/300px-Columbia_Engineering_logo.svg.png")
    this.miami = new Info("University of Miami", "Bachelor's Degree", "https://images-na.ssl-images-amazon.com/images/I/21VDrI8yzkL.jpg")
    this.ttp = new Info("NYC Tech Talent Pipeline", "Web Development Fellow", "http://static1.squarespace.com/static/54d3a0dee4b026182d00678f/t/55bfc497e4b0f7838bfbda9e/1551813991189/?format=1500w")
    this.toronto = new Info("University of Toronto", "Online Certification", "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/04/1df8943d27a485a986a3ebf10c83d9/UofT-Crest-Square.png?auto=format%2Ccompress&dpr=1&w=180&h=180")
    this.infoArr = [this.columbia, this.miami, this.ttp, this.toronto];

    this.state = {
      animateBool: true,
      pic1color: 0,
      pic2color: 1,
      pic3color: 3
    };
  }

  

  sequenceAnimation = () => {
    this.setState(
      {
        animateBool: !this.state.animateBool
      },
      this.toggleAnimate
    );
  };

  toggleAnimate = () => {
    this.changeColors();
    setTimeout(() => {

      this.setState({
        animateBool: !this.state.animateBool
      });
    }, 3000);
  };

  changeColors = () => {
    let pic1color = this.state.pic1color;
    let pic2color = this.state.pic2color;
    let pic3color = this.state.pic3color;

    let colors = [pic1color, pic2color, pic3color];

    pic1color--;
    if (pic1color === -1) {
      pic1color = 3;
    }
    pic2color--;
    if (pic2color === -1) {
      pic2color = 3;
    }
    pic3color--;
    if (pic3color === -1) {
      pic3color = 3;
    }

    this.setState({
      pic1color: pic1color,
      pic2color: pic2color,
      pic3color: pic3color
    });
  };

  componentDidMount() {
    let that = this;
    // setInterval(that.changeColors, 3000)
  }

  render() {
    let that = this;

    let animatePic1;
    let animatePic2;

    let pic3

    if (this.state.animateBool) {
      animatePic1 = "slideRight";
      animatePic2 = "disappear";

      pic3=  (<div
      // style={{ background: that.colorsArr[that.state.pic3color] }}
      id="pic3"
      className="pic"
    >
       <div className="topHalf"> </div>
      <div className="bottomHalf">
        <div className="text">
          {that.infoArr[that.state.pic3color].institution}
          <br />
          <br />
          {that.infoArr[that.state.pic3color].role}
        </div>
        <div className="logoContainer">
          <img
            className="logo"
            src={that.infoArr[that.state.pic3color].img}
          />
        </div>
      </div>
    </div>)
    } else {
      // animatePic1 = "translate105percent"
      // animatePic2 = "opacityZero"
    }
    return (
      <div className="App">
        <div id="sliderContainer">
          <div
            onAnimationEnd={this.sequenceAnimation}
            // style={{ background: that.colorsArr[that.state.pic1color] }}
            id="pic1"
            className={"pic" + " " + animatePic1}
          >
            <div className="topHalf"> </div>
            <div className="bottomHalf">
              <div className="text">
                {that.infoArr[that.state.pic1color].institution}
                <br />
                <br />
                {that.infoArr[that.state.pic1color].role}
              </div>
              <div className="logoContainer">
                <img
                  className="logo"
                  src={that.infoArr[that.state.pic1color].img}
                />
              </div>
            </div>
          </div>
          <div
            // style={{ background: that.colorsArr[that.state.pic2color] }}
            id="pic2"
            className={"pic" + " " + animatePic2}
          >
             <div className="topHalf"> </div>
            <div className="bottomHalf">
              <div className="text">
                {that.infoArr[that.state.pic2color].institution}
                <br />
                <br />
                {that.infoArr[that.state.pic2color].role}
              </div>
              <div className="logoContainer">
                <img
                  className="logo"
                  src={that.infoArr[that.state.pic2color].img}
                />
              </div>
            </div>
          </div>
       {pic3}
       
        </div>
      </div>
    );
  }
}

export default App;
