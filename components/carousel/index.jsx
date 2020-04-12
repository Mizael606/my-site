import { Component } from "react";

class CarouselHook extends Component {
  
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.children = props.children;
    this.props = props;

    this.itemsPerPage = props.itemsPerPage;
    this.delay = (this.props.delay) ? this.props.delay: 4000;
    
    this.carousel = null;
    this.area = null;
    this.rail = null;

    this.widthCarousel = 0;
    this.itemWidth = 0;

    this.pageFocus = 0;
    this.pageLimit = (this.children.length  - props.itemsPerPage);
    
  }

  initCarousel() {
    let carouselRects = window.document.getElementById(this.id).getClientRects()[0];      
    this.carousel  = window.document.getElementById(this.id);
    this.area = this.carousel.children[0];
    this.rail = this.area.children[0];
    this.widthCarousel = carouselRects.width;
    this.formatCarousel();
    setInterval(() => {
      this.animationStar();
    }, this.delay);

    setInterval(() => {
      let compare = window.document.getElementById(this.id).getClientRects()[0];
      if (compare.width === carouselRects.width) return;
      carouselRects = compare;
      this.widthCarousel = carouselRects.width;
      this.formatCarousel(true);
    }, 3000);

    window.addEventListener('scroll', () => {
      let compare = window.document.getElementById(this.id).getClientRects()[0];
      if (compare.width != carouselRects.width) {
        carouselRects = window.document.getElementById(this.id).getClientRects()[0];
      
        this.widthCarousel = carouselRects.width;
        this.formatCarousel(true);
      }
    });
    
    window.addEventListener('resize', () => {
      carouselRects = window.document.getElementById(this.id).getClientRects()[0];
      
      this.widthCarousel = carouselRects.width;
      this.formatCarousel(true);
    
    }, false);
  }

  componentDidMount() {
    if (typeof window === 'undefined') return;
    this.initCarousel();
  }

  animationStar() {
    if (this.pageFocus < this.pageLimit) {
      this.pageFocus += 1;
    } else {
      this.pageFocus = 0;
    }

    let back = this.itemWidth * this.pageFocus;
    this.rail.style[`transform`] = `translateX(-${back}px)`;
  }

  formatCarousel(reset = false) {
    
    if (this.props.responsive) {
      let breakPoints = this.props.responsive.map(v => v[0] );
      let keyBigBreakpoint = Math.max(...breakPoints); 
      let configCarousel = null;
      for (let i = keyBigBreakpoint; window.innerWidth < i;) {
        breakPoints = this.props.responsive.reduce((acumulator, currentValue0) => {
          if (currentValue0[0] <= window.innerWidth) acumulator.push(currentValue0[0]);
          return acumulator;
        }, []);
        keyBigBreakpoint = Math.max(...breakPoints);
        i = keyBigBreakpoint;
      }

      configCarousel = this.props.responsive.reduce((acumulador, currentValue) => {
        if ( currentValue[0] === keyBigBreakpoint) {
          acumulador = currentValue;
        }
        return acumulador;
      }, {});
      this.itemsPerPage = configCarousel[1];

    }
    let pageWidth = Math.floor(this.widthCarousel / this.itemsPerPage);
    let railWidth = Math.floor(pageWidth * this.children.length);
    
    this.rail.style.width = (railWidth) + 'px';

    for (let index = 0; index < this.rail.children.length; index++) {
      let item = this.rail.children[index];
      item.style.width = (pageWidth) + "px";
    }

    this.itemWidth = pageWidth;

    if (reset) {
      this.animationStar();
    }

  }

  renderItems() {
    let items = this.children.map((v, i) => {
      return (<div key={i+"-CarouselHooks"} className="CarouselHooks.item">
        {v}
      </div>);
    });
    return items;
  }

  render () {
    return (<>
      <section id={this.id} className="CarouselHooks" >
        <section className="CarouselHooks.area">
          <section className="CarouselHooks.rail">
            {this.renderItems()}
          </section>
        </section>
      </section>
      <style jsx>{`
        .CarouselHooks,
        .CarouselHooks\.area {
          width: 100%;
        }

        .CarouselHooks\.area {
          overflow: hidden;
        }

        .CarouselHooks\.rail {
          display: flex;
          padding: 0;
          transition: ease all 320ms;
        }

        .CarouselHooks\.item {
          boz-sizing: border-box;
        }        
        `}</style>
    </>)
  }

}

export default CarouselHook;