
const SkillsHooks = props => {

  return (<>
    <section id="page-skills" className="skill flex flex-wrap">
      <header className="skill.header xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-11/12 mr-auto ml-auto">
        <h2 className="skill.header.title">
          O que eu posso fazer?
        </h2>
      </header>
      <section className="skill.body flex flex-wrap justify-center items-center xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-11/12  mr-auto ml-auto ">
        <div className="sm:w-4/12 w-full">
          <figure className="skill.body.image w-7/12 mr-auto ml-auto">
            <img src="assets/images/pages.svg" alt=""/>
          </figure>
          <p className="skill.body.label">
            Páginas Web
          </p>
          <small className="skill.body.small">
            e-commerces, blogs e web apps
          </small>
        </div>
        <div className="sm:w-4/12 w-full">
          <figure className="skill.body.image w-7/12 mr-auto ml-auto">
            <img src="assets/images/mobile.svg" alt=""/>
          </figure>
          <p className="skill.body.label">
            Sites Mobile
          </p>
          <small className="skill.body.small">
            mobile firts e páginas otimizadas
          </small>
        </div>
        <div className="sm:w-4/12 w-full">
          <figure className="skill.body.image w-7/12 mr-auto ml-auto">
            <img src="assets/images/code.svg" alt=""/>
          </figure>
          <p className="skill.body.label">
            Novas Tecnologias
          </p>
          <small className="skill.body.small">
            React, Vue.js, Angullar, Svelte...
          </small>
        </div>
      </section>
      <section className="academy sm:w-10/12 w-10/12 py-8 flex flex-wrap items-center justify-center mx-auto">
        <div className="academy.box px-4">
          <img src="assets/images/senac.svg" className="academy.icons" alt="Senac"/>
        </div>
        <div className="academy.box px-4">
          <img src="assets/images/udemy-logo.svg" className="academy.icons" alt="Udemy"/>
        </div>
        <div className="academy.box px-4">
          <img src="assets/images/alura-logo.svg" className="academy.icons" alt="Alura"/>
        </div>
      </section>
    </section>
    <style jsx>{`
      .skill {
        padding: 15vh 0;
        position: relative;
      }  

      .skill\.header {
        padding: 0 0 10vh; 
      }

      .skill\.header\.title,
      .skill\.body\.label {
        text-align: center;
        color: var(--color-blue);
      }

      .skill\.body\.small {
        text-align: center;
        display: block;
        color: var(--color-grey);
        font-family: var(--font-variant);
        font-weight: 200;
      }

      .skill\.body\.image {
        padding: 10px;
        text-align: center;
      }

      .skill\.body\.image img {
        display: inline-block;
      }

      .academy {
        margin-top: 15vh;
      }

      .academy\.icons {
        max-height: 42px;
        opacity: 0.3;
        filter: grayscale(1);
      }

      @media only screen and (max-width: 640px) {

        .skill {
          padding: 30px 0;
        }

        .skill\.header\.title {
          font-size: var(--font-size-title-st)
        }

        .skill\.body\.image img {
          height: 70px;
          margin-bottom: 30px;
        }

        .skill\.body\.label {
          font-size: var(--font-size-subtitle-st);
        }

        .skill\.body\.small {
          font-size: var(--font-size-default-st);
          line-height: var(--font-size-default-st);
          margin-bottom: 30px;
        }

        .academy\.box {
          width: 90%;
          padding: 10px;
        }

      }

      @media only screen and (min-width: 640px) {

        .skill\.header\.title {
          font-size: var(--font-size-title-sm)
        }

        .skill\.body\.image img {
          height: 70px;
        }

        .skill\.body\.label {
          font-size: var(--font-size-subtitle-nn);
        }

        .skill\.body\.small {
          font-size: var(--font-size-menu-nn);
          line-height: var(--font-size-menu-nn);
        }

        .academy\.box {
          width: 140px;
          padding: 10px;
        }

      }

      @media only screen and (min-width: 768px) {
        .skill\.header\.title {
          font-size: var(--font-size-title-md)
        }

        .skill\.body\.image img {
          height: 120px;
        }

        .skill\.body\.label {
          font-size: var(--font-size-subtitle-sm);
        }

        .skill\.body\.small {
          font-size: var(--font-size-default-sm);
          line-height: var(--font-size-default-sm);
        }

        .academy\.box {
          width: 200px;
          padding: 10px;
        }
      }

      @media only screen and (min-width: 1024px) {
        .skill\.header\.title {
          font-size: var(--font-size-title-lg)
        }

        .skill\.body\.image img {
          height: 160px;
        }

        .skill\.body\.label {
          font-size: var(--font-size-subtitle-md);
        }

        .skill\.body\.small {
          font-size: var(--font-size-menu-md);
          line-height: var(--font-size-menu-md);
        }
      }

      @media only screen and (min-width: 1800px) {

        .skill\.body\.label {
          font-size: var(--font-size-subtitle-lg);
        }

        .skill\.body\.small {
          font-size: var(--font-size-menu-lg);
          line-height: var(--font-size-menu-lg);
        }
      }
    `}</style>
  </>)

};

export default SkillsHooks;