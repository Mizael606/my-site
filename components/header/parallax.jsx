import React, { Component } from "react"
import Rellax from "rellax"

class ParallaxHeader extends Component {

  componentDidMount() {
    if (!window) return;
    let rellax = new Rellax('.Circle',{
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }

  render() {
    
    return (<>
        
      <div data-rellax-speed="-8" className="Circle Circle.one"></div>
      <div data-rellax-speed="-4" data-rellax-zindex="-1" className="Circle Circle.two"></div>
      <div data-rellax-speed="4" data-rellax-zindex="5" className="Circle Circle.three"></div>
      
      <style jsx>{`
        .Circle {
          border-radius: 100%;
          position: absolute;
        }        

        .Circle\.one {          
          background-color: var(--color-pink);
        }      

        .Circle\.two {          
          opacity: 0.05;
          background-color: var(--color-grey);
        }      

        .Circle\.three {
          opacity: 0.3;
          background-color: var(--color-white);
        }

        @media only screen and (min-width: 1800px) {
          .Circle\.one {
            width: 340px;
            height: 340px;
            left: -70px;
          }

          .Circle\.two {
            width: 940px;
            height: 940px;
            left: 30vw;
            top: 10vh
          }

          .Circle\.three {
            width: 840px;
            height: 840px;
            right: -140px;
            top: -140px
          }
        }

      `}</style>
    </>)
  }

}

export default ParallaxHeader;