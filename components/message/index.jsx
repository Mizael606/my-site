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
      <footer className="lg:w-10/12 justify-center mr-auto ml-auto flex">
        <Carousel id="icons" itemsPerPage={ 8 } delay={ 3000 } responsive={[
            [1800, 8],
            [1024, 4],
            [768, 4],
            [640, 2],
            [320, 1]
          ]
        } >
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/angular.svg" alt="Logo: Angular"/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/apollostack.svg" alt="Logo: Apollo"/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/aurelia.svg" alt="Logo: Aurelia"/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/babel.svg" alt="Logo: Babel"/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/bitbucket.svg" alt="Logo: Bitbucket"/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/bootstrap.svg" alt="Logo: Bootstrap"/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/clojure.svg" alt="Logo: Clojure"/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/css-3.svg" alt="Logo: Css 3"/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/cyclejs.svg" alt="Logo: Cycle.js"/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/debian.svg" alt="Logo: Debian"/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/dojo.svg" alt="Logo: Dojo.js"/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/es6.svg" alt="Logo: Es6"/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/graphql.svg" alt="Logo: Graphql"/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/gulp.svg" alt="Logo: Gulp"/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/html-5.svg" alt="Logo: Html5"/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/mariadb.svg" alt="Logo: Maria DB"/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/mongodb.svg" alt="Logo: Mongo Db"/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/nextjs.svg" alt="Logo: "/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/nodejs.svg" alt="Logo: "/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/nodemon.svg" alt="Logo: "/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/npm.svg" alt="Logo: "/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/php.svg" alt="Logo: "/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/preact.svg" alt="Logo: "/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/react.svg" alt="Logo: "/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/sass.svg" alt="Logo: "/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/stylus.svg" alt="Logo: "/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/tailwindcss.svg" alt="Logo: "/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/visual-studio-code.svg" alt="Logo: "/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/vue.svg" alt="Logo: "/>
          </figure>
          <figure className="text-center message.icon">
            <img className="message.icon.skills" src="assets/images/icons/webpack.svg" alt="Logo: "/>
          </figure>
        </Carousel>
      </footer>
    </section>
    <style jsx>{`
      .message {
        padding: 15vh 0;
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

      .message\.icon\.skills {
        filter: grayscale(8) opacity(0.4);
        display: inline-block;
        transition: ease 220ms all;
      }

      .message\.icon\.skills:hover {
        filter: grayscale(0) opacity(1);
      }

      .message\.icon\.skills {
        max-width: 100%;
      }

      @media only screen and (max-width: 640px) {

        .message\.box {
          height: 250px;
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

        .message\.icon {
          height: 120px;
          padding-top: 20px;
        }

        .message\.icon\.skills {
          max-height: 80px;
          max-width: 70%;
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

        .message\.icon {
          height: 140px;
          padding-top: 25px;
        }

        .message\.icon\.skills {
          max-height: 90px;
          max-width: 80%;
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

        .message\.icon\.skills {
          max-height: 90px;
          max-width: 90%;
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

        .message\.icon {
          height: 180px;
          padding-top: 45px;
        }

        .message\.icon\.skills {
          max-height: 90px;
          max-width: 90%;
        }
      }
    `}</style>
  </>);
};

export default MessagesHook;