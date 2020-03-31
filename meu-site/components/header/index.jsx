const header = (props) => (
  <>
  <header className="header w-full" >
    <button className="header.mobile.menu md:hidden">
      <span><i></i></span>
    </button>
    <section className="xl:w-10/12 lg:w-11/12 md:w-11/12 sm:w-full w-11/12 flex ml-auto mr-auto">
      <section className="lg:w-6/12 md:w-6/12 sm:w-11/12 w-full ml-auto mr-auto">
        <div className="lg:w-full md:w-full sm:w-10/12 ml-auto mr-auto">
          <figure className="header.brand">
            <img className="header.brand.img" src="/assets/images/logo.svg" alt=""/>
          </figure>
          <h4 className="header.title.hello">
            HI, I am
          </h4>

          <h2 className="header.title.name">
            MIZAEL SILVA
          </h2>
          <small className="header.title.small">
            Desenvolvedor Fullstack Pleno
          </small>
          <ul className="header.social flex">
            <li className="header.social.item text-center sm:mr-6 mr-2" >
              <a href="#" target="_blank" >
                <i className="icon-github" ></i>
              </a>              
            </li>
            <li className="header.social.item text-center sm:mr-6 mr-2" >
              <a href="#" target="_blank" >
                <i className="icon-linkedin" ></i>
              </a>
            </li>
            <li className="header.social.item text-center" >
              <a href="#" target="_blank" >
                <i className="icon-instagram" ></i>  
              </a>
            </li>  
          </ul> 
        </div>
      </section>
      <section className="lg:w-6/12 md:w-6/12 lg:block md:block hidden header.men">
        <header className="header.men.header w-full ">
          <ul className="header.men.menu flex content-center items-center justify-center xl:py-4 py-1 text-center">
            <li className="header.men.menu.item mr-6">
              <a href="#">
                <span>
                  ABOUT
                </span>
              </a>
            </li>
            <li className="header.men.menu.item mr-6">
              <a href="#">
                <span>
                  WORK
                </span>
              </a>
            </li>
            <li className="header.men.menu.item mr-6">
              <a href="#">
                <span>
                  PORTFOLIO
                </span>
              </a>
            </li>
            <li className="header.men.menu.item mr-6">
              <a href="#">
                <span className="header.men.menu.button">
                  HIRE ME
                </span>
              </a>
            </li>
          </ul>
        </header>
        <section className="header.men.body">
          <figure className="header.men.figure flex content-center items-center justify-center">
            <img src="assets/images/men.svg" />
          </figure>
        </section>
      </section>
    </section>
  </header>
  <style jsx>{`
    .header,
    .header div {
      position: relative;
    }

    .header {
      padding: 10vh 10px;
    }

    .header:after,
    .header:before {
      position: absolute;
      content: "";
    }

    .header:before {
      width: 50vw;
      height: 100vh;
      top: 0;
      right: 0;
      background-color: var(--color-red);
      z-index: -1;
    }

    .header:after {
      right:0;
      bottom: 5vh;
      width: 70vw;
      height: 80vh;
      z-index: -1;
      background-image: url("assets/images/messages.svg");
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center center;
    }

    .header div,
    .header\.men {
      height: 80vh;
      position: relative;
    }

    .header\.mobile\.menu {
      position: fixed;
      top: 4vh;
      right: 4vw;
      width: 30px;
      height: 30px;
      border-radius: 100%;
    }

    .header\.mobile\.menu span {
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      margin: -15px auto 0;
      width: 30px;
      height: 30px;
      line-height: 25px;
    }

    .header\.mobile\.menu span:before,
    .header\.mobile\.menu span:after {
      content: "";
      position: absolute;
      left: 0;
    }

    .header\.mobile\.menu span:before {
      top: 15%;
    }

    .header\.mobile\.menu span:after {
      bottom: 16%;
    }

    .header\.mobile\.menu span i,
    .header\.mobile\.menu span:before,
    .header\.mobile\.menu span:after {
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background-color: var(--color-red);
      transform-origin: center right;
      transition: linear 120ms all;
    }

    .header\.mobile\.menu span i {
      display: inline-block;
      transition: ease 100ms all;
    }

    .header\.mobile\.menu.is-hide span:before {
      transform: rotateZ(-34deg)
    }

    .header\.mobile\.menu.is-hide span:after {
      transform: rotateZ(34deg)
    }

    .header\.mobile\.menu.is-hide span i {
      transform: scaleX(0);
    }

    .header\.brand {
      padding: 10px 0;
      width: 130px;
    }

    .header\.brand\.img {
      width: 100%;
      margin: 0 auto;
    }

    .header\.title\.hello,
    .header\.title\.name {
      text-align: left;
    }

    .header\.title\.hello {
      color: var(--color-blue);
      margin: 20px 0;
    }

    .header\.title\.name {
      color: var(--color-red);
      font-weight: 300;
    }

    .header\.title\.small {
      font-weight: 100;
      display: block;
      color: var(--color-blue-light);
    }

    .header\.social {
      position: absolute;
      bottom: 10vh;
      left: 0;
    }

    .header\.social\.item {
      background-color: var(--color-white);
      box-shadow: 3px 0 8px #efefef;      
    }

    .header\.social\.item i,
    .header\.social\.item i:before {
      color: var(--color-blue-light);
    }

    .header\.men\.header {
      position: absolute;
      left: 0;
      top: -10vh;
      padding: 10px;
    }

    .header\.men\.menu\.item a span {
      color: var(--color-white);
      font-weight: 100;
    }

    .header\.men\.menu\.item a span.header\.men\.menu\.button {
      display: block;
      padding: 10px 25px;
      background-color: var(--color-white);
      color: var(--color-red);
      border-bottom-right-radius: 20px;
    }

    .header\.men\.body {
      position: relative;
    }

    .header\.men\.figure {
      position: absolute;
      top: 0;
      height: 80vh;
    }

    .header\.men\.figure img {
      max-height: 80vh;
      max-width: 90%;
    }


    @media only screen and (min-height: 600px) {
      .header\.men\.figure {
        left: -15%;
        max-height: 528px;
      }
    }

    @media only screen and (min-height: 680px) {
      .header\.men\.figure {
        left: -15%;
        max-height: 608px;
      }
    }

    @media only screen and (min-height: 768px) {
      .header\.men\.figure {
        left: -15%;
        max-height: 680px;
      }
    }

    @media only screen and (min-height: 930px) {
      .header\.men\.figure {
        left: -15%;
        max-height: 780px;
      }
    }
    
    @media only screen and (max-width: 640px) {
      .header:before {
        display: none;
      }

      .header:after {
        max-width: 50vw;
      }

      .header\.title\.name,
      .header\.title\.hello{
        font-size: var(--font-size-title-st);
        line-height: var(--font-size-title-st);
      }

      .header\.social\.item{
        height: 30px;
        width: 30px;
        line-height: 34px;
        font-size: var(--font-size-menu-nn);
      }

      .header\.brand {
        max-width: 80px;
      }
    }

    @media only screen and (min-width: 640px) {
      .header:before {
        display: none;
      }

      .header\.title\.name,
      .header\.title\.hello{
        font-size: var(--font-size-title-nn);
        line-height: var(--font-size-title-nn);
      }

      .header\.title\.small {
        font-size: var(--font-size-default-nn);
        line-height: var(--font-size-default-nn);
      }

      .header\.men\.menu\.item a span {
        font-size: var(--font-size-menu-nn)
      }

      .header\.social\.item{
        height: 60px;
        width: 60px;
        line-height: 64px;
        font-size: 28px;
      }
    }

    @media only screen and (min-width: 768px) {

      .header:before {
        display: block;
      }

      .header:after {
        display: none;
      }

      .header\.title\.name,
      .header\.title\.hello{
        font-size: var(--font-size-title-sm);
        line-height: var(--font-size-title-sm);
      }

      .header\.title\.small {
        font-size: var(--font-size-default-sm);
        line-height: var(--font-size-default-sm);
      }

      .header\.men\.menu\.item a span {
        font-size: var(--font-size-menu-sm)
      }
    }
    
    @media only screen and (min-width: 1024px) {
      .header\.title\.name{
        font-size: var(--font-size-title-md);
        line-height: var(--font-size-title-md);
      }

      .header\.title\.small {
        font-size: var(--font-size-default-md);
        line-height: var(--font-size-default-md);
      }

      .header\.men\.menu\.item a span {
        font-size: var(--font-size-menu-md)
      }

      .header\.title\.hello {
        font-size: 33px;
      }

    }

    @media only screen and (min-width: 1800px) {
      .header\.title\.name{
        font-size: var(--font-size-title-lg);
        line-height: var(--font-size-title-lg);
      }

      .header\.title\.small {
        font-size: var(--font-size-default-lg);
        line-height: var(--font-size-default-lg);
      }

      .header\.men\.menu\.item a span {
        font-size: var(--font-size-menu-lg)
      }      

    }
  `}</style>
  </>
);

export default header;