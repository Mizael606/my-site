import Carousel from "../carousel/index";

const MessagesHook = props => {

  return (<>
    <section id="page-messages" className="message">
    <i data-rellax-desktop-speed="-2" data-rellax-tablet-speed="-1" data-rellax-mobile-speed="-1" data-rellax-speed="-0" className="rellax.parallax rellax.circle rellax.circle.eight"></i>
    <i data-rellax-desktop-speed="-1" data-rellax-tablet-speed="-1" data-rellax-mobile-speed="0" data-rellax-speed="-1" className="rellax.parallax rellax.circle rellax.circle.nine"></i>
      <header className="message.header lg:w-10/12 mr-auto ml-auto">
        <figure className="message.header.quotation">
          <img src="assets/images/quotes.svg" alt="" className="message.header.quotation.image" />
        </figure>
      </header>
      <section className="lg:w-10/12 mr-auto ml-auto">
        <section className="lg:w-10/12 mr-auto ml-auto" >
          <Carousel id="messages" delay={ 6000 } itemsPerPage={ 1 } >
            <section className="message.box">
              <header className="message.box.header lg:w-10/12 mr-auto ml-auto">
                <h5 className="message.box.header.title text-center">
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere harum quos veritatis? Eum animi mollitia eveniet vel ab modi accusamus obcaecati in? "
                </h5>
              </header>
              <section className="message.box.body">
                <h5 className="message.box.body.author text-center">
                  Bruce Mccoy
                </h5>
                <p className="message.box.body.title text-center">
                  Founder & CEO Aleis
                </p>
              </section>
            </section>
            
            <section className="message.box">
              <header className="message.box.header">
                <h5 className="message.box.header.title text-center">
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere harum quos veritatis? Eum animi mollitia eveniet vel ab modi accusamus obcaecati in? "
                </h5>
              </header>
              <section className="message.box.body">
                <h5 className="message.box.body.author text-center">
                  Bruce Mccoy
                </h5>
                <p className="message.box.body.title text-center">
                  Founder & CEO Aleis
                </p>
              </section>
            </section>

            <section className="message.box">
              <header className="message.box.header">
                <h5 className="message.box.header.title text-center">
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere harum quos veritatis? Eum animi mollitia eveniet vel ab modi accusamus obcaecati in? "
                </h5>
              </header>
              <section className="message.box.body">
                <h5 className="message.box.body.author text-center">
                  Bruce Mccoy
                </h5>
                <p className="message.box.body.title text-center">
                  Founder & CEO Aleis
                </p>
              </section>
            </section>

            <section className="message.box">
              <header className="message.box.header">
                <h5 className="message.box.header.title text-center">
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere harum quos veritatis? Eum animi mollitia eveniet vel ab modi accusamus obcaecati in? "
                </h5>
              </header>
              <section className="message.box.body">
                <h5 className="message.box.body.author text-center">
                  Bruce Mccoy
                </h5>
                <p className="message.box.body.title text-center">
                  Founder & CEO Aleis
                </p>
              </section>
            </section>
          </Carousel>
        </section>
      </section>
    </section>    
    <style jsx>{`
      .message {
        padding: 15vh 0;
        position: relative;
      }

      .message\.header {
        text-align: center;
      }

      .message\.header\.quotation {
        margin: 5vh auto;
        display: inline-block;
      }

      .message\.header\.quotation\.image {
        width: 90%;
        margin: 10px 5%;
      }

      .message\.box\.header {
        padding: 4vh;
      }

      .message\.box\.header\.title {
        color: var(--color-blue);
      }

      .message\.box\.body\.author {
        font-weight: bold;
        color: var(--color-blue)
      }

      .message\.box\.body\.title {
        color: var(--color-grey);
      }

      @media only screen and (max-width: 640px) {

        .message\.box {
          min-height: 250px;
          padding: 10px 0
        }

        .message\.box\.header\.title {
          font-size: var(--font-size-subtitle-st);
        }

        .message\.box\.body\.author {
          font-size: var(--font-size-default-st);
        }

        .message\.box\.body\.title {
          font-size: var(--font-size-default-st);
        }

      }

      @media only screen and (min-width: 640px) {

        .message\.box {
          height: 300px;
        }

        .message\.box\.header\.title {
          font-size: var(--font-size-subtitle-nn);
        }

        .message\.box\.body\.author {
          font-size: var(--font-size-default-nn);
        }

        .message\.box\.body\.title {
          font-size: var(--font-size-default-nn);
        }

      }

      @media only screen and (min-width: 768px) {

        .message\.box\.header\.title {
          font-size: var(--font-size-subtitle-sm);
        }

        .message\.box\.body\.author {
          font-size: var(--font-size-default-sm);
        }

        .message\.box\.body\.title {
          font-size: var(--font-size-default-sm);
        }

      }

      @media only screen and (min-width: 1024px) {
        .message\.box {
          height: 400px;
        }

        .message\.box\.header\.title {
          font-size: var(--font-size-subtitle-md);
        }

        .message\.box\.body\.author {
          font-size: var(--font-size-default-md);
        }

        .message\.box\.body\.title {
          font-size: var(--font-size-menu-md);
        }

      }

      @media only screen and (min-width: 1800px) {

        .message\.box\.header\.title {
          font-size: var(--font-size-subtitle-lg);
        }

        .message\.box\.body\.author {
          font-size: var(--font-size-default-lg);
        }

        .message\.box\.body\.title {
          font-size: var(--font-size-menu-lg);
        }

      }
    `}</style>
  </>);
};

export default MessagesHook;