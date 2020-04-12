import React, { Component } from "react";
import imagesLoaded from "imagesloaded";
import Lottie from "lottie-web";
import animationData from "../../asset/animations/data.json";

class LoadingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      close: false,
      loadingNow: true,
      percentload: 0
    }
  }
  
  componentDidMount() {
    if ( !window ) return;
      this.loadCheck();
      this.initAnimation();
  }

  initAnimation() {
    let animationWithlottie = Lottie.loadAnimation({
      container: window.document.getElementById(`loadanimation`),
      renderer: 'canvas',
      autoplay: true,
      animationData: animationData,
      loop: true
    });
  }

  loadCheck() {
    let loadedNumberImage = 0;
    let imagesLoad = imagesLoaded('main', { background: true }, () => {
      setTimeout(() => {

        this.setState({
          close: true
        });
  
        setTimeout(() => {
          this.setState({
            loadingNow: false
          });
          window.document.querySelector('body').style['overflow'] = "auto";
        }, 2000);

      }, 500);      
    });

    imagesLoad.on('progress', (i, img) => {
      if (window) {
        if (img.isLoaded) loadedNumberImage++;
        let imgs = window.document.querySelectorAll('img').length;
        let onePercent = imgs / 100;
        let currentPercent = Math.round(loadedNumberImage / onePercent);
        this.setState({
          percentload: currentPercent
        });
      }
    });

  }

  get closeClass() {
    if (this.state.close) return 'is-hide';
    return ""
  }

  render() {
    return (<>
      {(this.state.loadingNow) && (<>
      <section className={`loading ${(() => (this.closeClass))()}`}>
        <div className="loading.animation">
          <figure id="loadanimation"  className="loading.animation.figure"></figure>
          <div className="loading.load.header">
            <span className='loading.load.label text-right'>
              {this.state.percentload}%
            </span>
          </div>
          <div className="loading.load">
            <div className="loading.load.bar"></div>
          </div>
        </div>
      </section>
      </>)}
      <style jsx>{`

        .loading {
          position: fixed;
          width: 100vw;
          height: 100vh;
          z-index: 9999999;
          background-color: #FFFFFF;
          transition: ease 0.9s all;
          transform-origin: top left;
        }

        .loading.is-hide {
          filter: opacity(0);
        }

        .loading\.animation {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          margin: 0 auto;
        }

        .loading\.load {
          border: solid 1px var(--color-blue-light);
          border-radius: 60px;
          display: block;
          margin: 0 auto;
          padding: 5px;
          height: 27px;
          position: relative;
        }

        .loading\.load\.header {
          margin: 0 auto;
        }

        .loading\.load\.label {
          font-weight: 600;
          color: var(--color-blue-light);
          display: block;
          width: ${this.state.percentload}%;
          transition: ease all 420ms;
        }

        .loading\.load:before,
        .loading\.load\.bar {
          height: 15px;
          border-radius: 60px;
        }

        .loading\.load:before {
          content: "";
          display: block;
          position: absolute;
          left: 5px;
          top: 5px;
          background-color: var(--color-violet);
          z-index: -1;
        }

        .loading\.load\.bar {
          background-color: var(--color-blue-light);
          transition: ease all 420ms;
          width: ${this.state.percentload}%;
        }

        @media only screen and (min-width: 310px) {

          .loading\.animation {
            width: 300px;
            margin-top: -100px; 
          }

          .loading\.load,
          .loading\.load\.header {
            width: 200px;
          }

          .loading\.load:before {
            width: 188px;
          }

        }

        @media only screen and (min-width: 640px) {

          .loading\.animation {
            width: 380px;
            margin-top: -120px; 
          }

          .loading\.load,
          .loading\.load\.header {
            width: 200px;
          }

          .loading\.load:before {
            width: 188px;
          }

        }

        @media only screen and (min-width: 768px) {

          .loading\.animation {
            width: 480px;
            margin-top: -160px; 
          }

          .loading\.load,
          .loading\.load\.header {
            width: 280px;
          }

          .loading\.load:before {
            width: 268px;
          } 
        }

        `}</style>
    </>)
  }

}

export default LoadingPage;