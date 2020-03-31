import { Component } from "react";

class CarouselHook extends Component {
  
  constructor(props) {
    super(props);
    this.children = props.children;
    this.config = {
      autoplay: (props.autoPlay) ? props.autoPlay: false,
      itemsPerPage: props.itemsPerPage
    };
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
      <section className="CarouselHooks" >
        <section className="CarouselHooks.area">
          <section className="CarouselHooks.rail">
            {this.renderItems()}
          </section>
        </section>
      </section>
    </>)
  }

}

export default CarouselHook;