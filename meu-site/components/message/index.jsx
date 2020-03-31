import Carousel from "../carousel/index";

const MessagesHook = props => {

  return (<>
    <section className="message">
      <header className="message.header lg:w-10/12 mr-auto ml-auto">
        <figure className="message.header.quotation">
          <img src="assets/images/quotes.svg" alt="" className="message.header.quotation.image" />
        </figure>
      </header>
      <section className="lg:w-10/12 mr-auto ml-auto">
        <section className="lg:w-10/12 mr-auto ml-auto" >
          <Carousel autoplay={ true } itemsPerPage={ 1 } >
            <div>
              hxckvhj
            </div>
            <div>
              hxckvhj
            </div>
          </Carousel>
        </section>
      </section>
    </section>
  </>);
};

export default MessagesHook;