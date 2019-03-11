import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.colorsArr = ["yellow", "purple", "green", "blue"]

    this.state =  {
      animateBool: true,
      pic1color: 0,
      pic2color: 1,
      pic3color: 3

    }

  }

  

  sequenceAnimation = () => {

   

    

    this.setState({
      animateBool: !this.state.animateBool
      }, this.toggleAnimate);
   
    
  }

  toggleAnimate = () => {
    
    this.changeColors()
    setTimeout( () => {
      console.log("blah")

      
      this.setState({
        animateBool: !this.state.animateBool
        })
    }, 2000

    )
    
  }

  changeColors = () => {

    let pic1color = this.state.pic1color
    let pic2color = this.state.pic2color
    let pic3color = this.state.pic3color

    let colors = [pic1color, pic2color, pic3color]

    pic1color--
    if(pic1color===-1) {
      pic1color = 3
    }
    pic2color--
    if(pic2color===-1) {
      pic2color = 3
    }
    pic3color--
    if(pic3color===-1) {
      pic3color = 3
    }

    // colors.forEach((color, index) => {
      
    //    color++
    //   //  console.log(color)
    //   if(color===3) {
    //     color = 0
    //   }





    // })

    console.log(pic1color)
    
    this.setState({
      pic1color: pic1color,
      pic2color: pic2color,
      pic3color: pic3color,
      })
    }

  componentDidMount() {
    let that = this
    // setInterval(that.changeColors, 3000)
  }


  render() {

    let that = this

    let animatePic1
    let animatePic2

    if(this.state.animateBool) {
      animatePic1 = "slideRight"
      animatePic2 = "disappear"
    } else {
      // animatePic1 = "translate105percent"
      // animatePic2 = "opacityZero"
    }
    return (
      <div className="App">
        <div id="sliderContainer"> 
          <div onAnimationEnd={this.sequenceAnimation} style={{background: that.colorsArr[that.state.pic1color]}} id="pic1"  className={"pic" + " " + animatePic1}> Pic 1 </div>
          <div style={{background: that.colorsArr[that.state.pic2color]}} id="pic2" className={"pic" + " " + animatePic2}> Pic 2 </div>
          <div style={{background: that.colorsArr[that.state.pic3color]}} id="pic3" className="pic"> Pic 3 </div>
        </div>
      </div>
    );
  }
}

export default App;
