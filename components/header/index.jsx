import { useEffect, useState } from "react";

function scrollIt(destination, duration = 320, easing = 'easeInOutQuint', callback) {

  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

const header = (props) => {
  let activateAbout = false;
  let activateCareer = false;
  let activateWork = false;
  let activatePortfolio = false;
  let activateMenu = false;
  let toggleMenu = () => {
    let position = window.pageYOffset;
    let target = window.document.getElementById('page-about');
    let positioncareer = document.getElementById('page-career');
    let positionskills = document.getElementById('page-skills');
    let positionjobs = document.getElementById('page-jobs');
    let positionMessage = document.getElementById('page-messages');
    let topPos = target.offsetTop;
    let menu = window.document.getElementById('header-fixed-left');
    if ( position >= topPos && !activateMenu ) {
      menu.className = menu.className.replace("is-show", "").trim();
      menu.className += " is-show";
      activateMenu = true;
    } else if (position < topPos && activateMenu) {
      menu.className = menu.className.replace("is-show", "").trim();
      activateMenu = false;
    }

    if (position >=topPos && position < positioncareer.offsetTop  && !activateAbout ) {
      window.document.querySelector('[data-refer="page-about"]').className = window.document.querySelector('[data-refer="page-about"]').className.replace("is-active", "").trim();
      window.document.querySelector('[data-refer="page-career"]').className = window.document.querySelector('[data-refer="page-career"]').className.replace("is-active", "").trim();
      window.document.querySelector('[data-refer="page-about"]').className += " is-active";
      activateAbout = true;
      activateWork =  false;
      activateCareer = false;
    }

    console.log(position >= positioncareer.offsetTop && position < positioncareer.offsetTop  && !activateCareer);
    
    if (position >= positioncareer.offsetTop && position < positionskills.offsetTop  && !activateCareer ) {
      window.document.querySelector('[data-refer="page-career"]').className = window.document.querySelector('[data-refer="page-career"]').className.replace("is-active", "").trim();
      window.document.querySelector('[data-refer="page-about"]').className = window.document.querySelector('[data-refer="page-about"]').className.replace("is-active", "").trim();
      window.document.querySelector('[data-refer="page-skills"]').className = window.document.querySelector('[data-refer="page-skills"]').className.replace("is-active", "").trim();
      window.document.querySelector('[data-refer="page-career"]').className += " is-active";
      activateCareer = true;
      activateAbout = false;
      activateWork =  false;
    }
    
    if (position >= positionskills.offsetTop && position < positionjobs.offsetTop  && !activateWork) {
      window.document.querySelector('[data-refer="page-career"]').className = window.document.querySelector('[data-refer="page-career"]').className.replace("is-active", "").trim();
      window.document.querySelector('[data-refer="page-skills"]').className = window.document.querySelector('[data-refer="page-skills"]').className.replace("is-active", "").trim();
      window.document.querySelector('[data-refer="page-jobs"]').className = window.document.querySelector('[data-refer="page-jobs"]').className.replace("is-active", "").trim();
      window.document.querySelector('[data-refer="page-skills"]').className += " is-active";
      activatePortfolio = false;
      activateCareer = false;
      activateWork =  true;
    } 
    
    if (position >= positionjobs.offsetTop && !activatePortfolio) {
      // setActivateWork(false);
      // setActivatePortfolio(true);
      window.document.querySelector('[data-refer="page-skills"]').className = window.document.querySelector('[data-refer="page-skills"]').className.replace("is-active", "").trim();
      window.document.querySelector('[data-refer="page-jobs"]').className = window.document.querySelector('[data-refer="page-jobs"]').className.replace("is-active", "").trim();
      window.document.querySelector('[data-refer="page-jobs"]').className += " is-active";
      activateWork =  false;
      activatePortfolio = true;
    }

    if (position >= positionMessage.offsetTop) {
      window.document.querySelector('[data-refer="page-jobs"]').className = window.document.querySelector('[data-refer="page-jobs"]').className.replace("is-active", "").trim();
      activatePortfolio = false;
    }

  };
  let menuMobileActive = false;
  let toggleMenuMobile = () => {
    let trigger = window.document.getElementById('mobile-menu');
    let target = window.document.querySelector('[data-menu="mobile-menu"]');
    if (!menuMobileActive) {
      menuMobileActive = true;
      trigger.className += " is-hide";
      target.className += " is-show";
    } else {
      trigger.className = trigger.className.replace("is-hide", "").trim();
      target.className = target.className.replace("is-show", "").trim();
      menuMobileActive = false;
    }
  };
  useEffect(() => {
    toggleMenu();
    if (window) {
      window.addEventListener('scroll', () => {
        toggleMenu();
      }, false);      
    }
  });
  
  return (
    <>    
    <header className="header w-full" >
      <i data-rellax-speed="-8" data-rellax-tablet-speed="-7" className="rellax.parallax rellax.circle rellax.circle.one"></i>
      <i data-rellax-speed="-4" data-rellax-tablet-speed="-3" className="rellax.parallax rellax.circle rellax.circle.two"></i>
      <i data-rellax-speed="5" className="rellax.parallax rellax.circle rellax.circle.three"></i>
      <i data-rellax-speed="5" className="rellax.parallax rellax.circle rellax.circle.three"></i>
      <button onClick={() => {toggleMenuMobile()}} id="mobile-menu" className="header.mobile.menu md:hidden">
        <span><i></i></span>
      </button>
      <section data-menu="mobile-menu" className="header.mobile.menu.float md:hidden">
        <ul className="header.mobile.menu.items">
          <li>
            <a href="#" onClick={ e => {
              e.preventDefault();
              toggleMenuMobile();
              setTimeout(() => {
                scrollIt(document.getElementById('page-about'));
              }, 800);
            }}>
              <span>
                SOBRE
              </span>
            </a>
          </li>
          <li>
            <a href="#" onClick={ e => {
              e.preventDefault();
              toggleMenuMobile();
              setTimeout(() => {
                scrollIt(document.getElementById('page-career'));
              }, 800);
            }}>
              <span>
                CARREIRA
              </span>
            </a>
          </li>
          <li>
            <a href="#" onClick={ e => {
              e.preventDefault();
              toggleMenuMobile();
              setTimeout(() => {
                scrollIt(document.getElementById('page-skills'));
              }, 800);
            }}>
              <span>
                HABILIDADES
              </span>
            </a>
          </li>
          <li>
            <a href="#" onClick={ e => {
              e.preventDefault();
              toggleMenuMobile();
              setTimeout(() => {
                scrollIt(document.getElementById('page-jobs'));
              }, 800);
            }}>
              <span>
                TRABALHOS
              </span>
            </a>
          </li>
        </ul>
      </section>
      <section className="xl:w-10/12 lg:w-11/12 md:w-11/12 sm:w-full w-11/12 flex ml-auto mr-auto">
        <section className="lg:w-6/12 md:w-6/12 sm:w-11/12 w-full ml-auto mr-auto">
          <div className="lg:w-full md:w-full sm:w-10/12 ml-auto mr-auto">
            <figure className="header.brand">
              <img className="header.brand.img" src="/assets/images/logo.svg" alt=""/>
            </figure>
            <h4 className="header.title.hello">
              Prazer, sou
            </h4>

            <h2 className="header.title.name">
              MIZAEL SILVA
            </h2>
            <small className="header.title.small">
              Desenvolvedor Fullstack Pleno
            </small>
            <ul className="header.social flex">
              <li className="header.social.item text-center sm:mr-6 mr-2" >
                <a href="https://github.com/Mizael606" target="_blank" >
                  <i className="icon-github" ></i>
                </a>              
              </li>
              <li className="header.social.item text-center sm:mr-6 mr-2" >
                <a href="https://www.linkedin.com/in/mizzzael606/" target="_blank" >
                  <i className="icon-linkedin" ></i>
                </a>
              </li>
              <li className="header.social.item text-center" >
                <a href="https://www.instagram.com/mizzzael_/" target="_blank" >
                  <i className="icon-instagram" ></i>  
                </a>
              </li>  
            </ul> 
          </div>
        </section>
        <section className="lg:w-6/12 md:w-6/12 lg:block md:block hidden header.men">
          <header className="header.men.header w-full ">
            <ul className="header.men.menu flex content-center items-center justify-center xl:py-4 py-1 text-center">
              <li className="header.men.menu.item lg:mr-6 md:mr-2">
                <a href="#" onClick={ e => {
                  e.preventDefault();
                  scrollIt(document.getElementById('page-about'));
                }}>
                  <span>
                    SOBRE
                  </span>
                </a>
              </li>
              <li className="header.men.menu.item lg:mr-6 md:mr-2">
                <a href="#" onClick={ e => {
                  e.preventDefault();
                  scrollIt(document.getElementById('page-career'));
                }}>
                  <span>
                    CARREIRA
                  </span>
                </a>
              </li>
              <li className="header.men.menu.item lg:mr-6 md:mr-2">
                <a href="#" onClick={ e => {
                  e.preventDefault();
                  scrollIt(document.getElementById('page-skills'));
                }}>
                  <span>
                    HABILIDADES
                  </span>
                </a>
              </li>
              <li className="header.men.menu.item lg:mr-6 md:mr-2">
                <a href="#" onClick={ e => {
                  e.preventDefault();
                  scrollIt(document.getElementById('page-jobs'));
                }}>
                  <span>
                    TRABALHOS
                  </span>
                </a>
              </li>
              <li className="header.men.menu.item mr-6">
                <a href="#" onClick={ e => {
                  e.preventDefault();
                  window.top.location.pathname = "/assets/docs/curriculo.pdf";
                }}>
                  <span className="header.men.menu.button">
                    CONTRATE-ME
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
    <section id="header-fixed-left" className="Header.fixed.left">
      <ul className="Header.fixed.items">
        <li data-refer="page-about" className="Header.fixed.item text-center" >
          <a href="#" onClick={e => {
            e.preventDefault();
            scrollIt(document.getElementById('page-about'));
          }} >
            Sobre
          </a>
        </li>
        <li data-refer="page-career" className="Header.fixed.item text-center" >
          <a href="#" onClick={e => {
            e.preventDefault();
            scrollIt(document.getElementById('page-career'));
          }} >
            Carreira
          </a>
        </li>
        <li data-refer="page-skills" className="Header.fixed.item text-center" >
          <a href="#" onClick={e => {
            e.preventDefault();
            scrollIt(document.getElementById('page-skills'));
          }} >
            Hábilidades
          </a>
        </li>
        <li data-refer="page-jobs" className="Header.fixed.item text-center" >
          <a href="#" onClick={(e) => {
            e.preventDefault();
            scrollIt(document.getElementById('page-jobs'));
          }} >
            Trabalhos
          </a>
        </li>
      </ul>          
    </section>
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
        z-index: 0;
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
        outline: none;
        border-radius: 100%;
        z-index: 9999;
      }

      .header\.mobile\.menu\.float {
        position: fixed;
        height: 100vh;
        width: 100vw;
        top: 0;
        right: 0;
        background-color: var(--color-violet);
        z-index: 999;
        transition: ease 220ms all;
      }

      .header\.mobile\.menu\.float:not(.is-show) {
        right: -100vw;
      }

      .header\.mobile\.menu\.items {
        width: 100%;
        margin-top: 100px;
        text-align: right;
      }

      .header\.mobile\.menu\.items li {
        padding: 10px 5px;
      }

      .header\.mobile\.menu\.items li a span {
        font-weight: bold;
        color: var(--color-red);
        font-size: var(--font-size-subtitle-st)
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
        transition: ease 220ms ease;
      }

      .header\.social\.item:not(:hover) i,
      .header\.social\.item:not(:hover) i:before {
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
        transition: ease 320ms all;
      }

      .header\.men\.menu\.item:hover a span {
        color: var(--color-violet);
        text-shadow: 0 0 4px var(--color-violet);
      }

      .header\.men\.menu\.item a span.header\.men\.menu\.button {
        display: block;
        padding: 10px 25px;
        background-color: var(--color-white);
        color: var(--color-red);
        border-bottom-right-radius: 20px;
        transition: ease 320ms all;
      }

      .header\.men\.menu\.item:hover a span.header\.men\.menu\.button {
        background-color: var(--color-violet);
        color: var(--color-red);
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

      .Header\.fixed\.left {
        position: fixed;
        left: -60px;
        top: 15vh;
        height: 70vh;
        width: 60px;
        z-index: 999999;
        transition: 320ms ease all;
      }

      .Header\.fixed\.items {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        writing-mode: vertical-lr;
        height: 70vh;
      }

      .Header\.fixed\.item {
        height: 120px;
        line-height: 60px;
        font-size: 18px
      }

      .Header\.fixed\.item a {
        color: var(--color-blue-light);
        mix-blend-mode: color;
        font-weight: 900;
        transition: ease 220ms all;
      }

      .Header\.fixed\.item.is-active a {
        color: var(--color-blue);
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
          max-width: 90vw;
        }

        .header\.title\.name,
        .header\.title\.hello{
          font-size: var(--font-size-title-st);
          line-height: var(--font-size-title-st);
        }

        .header\.social\.item{
          height: 40px;
          width: 40px;
          line-height: 40px;
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

        .Header\.fixed\.left.is-show {
          left: 0;
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
  )
};

export default header;