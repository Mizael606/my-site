const AboutHooks = props => {
  return (<>
  <section id="page-about" className="w-full about">
    <i data-rellax-desktop-speed="-5" data-rellax-tablet-speed="-4" data-rellax-mobile-speed="-3" data-rellax-speed="-3" className="rellax.parallax rellax.circle rellax.circle.four"></i>
    <i data-rellax-desktop-speed="-4" data-rellax-tablet-speed="-2" data-rellax-mobile-speed="-1" data-rellax-speed="-1" className="rellax.parallax rellax.circle rellax.circle.five"></i>
    <i data-rellax-desktop-speed="-8" data-rellax-tablet-speed="-3" data-rellax-mobile-speed="-2" data-rellax-speed="-2" className="rellax.parallax rellax.figure rellax.figure.one">
      <img src="assets/images/dots.svg" alt=""/>
    </i>
    <div className="about.content xl:w-10/12 md:w-11/12 sm:w-11/12 w-full flex flex-wrap content-center items-center justify-center mr-auto ml-auto">
      <aside className="about.header lg:w-4/12 md:w-full sm:w-11/12 w-11/12" >
        <header className="xl:w-full lg:w-full md:w-full sm:w-10/12 w-full mr-auto ml-auto py-4">
          <h4 className="about.header.title">
            Minha<br />
            História
          </h4>
          <button onClick={() => {
            window.top.location.pathname = "/assets/docs/curriculo.pdf"
          }} className="about.header.curriculum flex content-center items-center justify-center lg:flex sm:hidden hidden">
            <span className="about.header.curriculum.icon" ><i className="icon-cheveron-down"></i></span> Download
          </button>
        </header>      
      </aside>
      <section className="about.body lg:w-8/12 md:w-full sm:w-11/12 w-11/12">
        <div className="lg:w-10/12 md:w-full sm:w-10/12 mr-auto ml-auto w-full">
          <p className="about.header.text">
            Meu nome é Mizael, tenho {(new Date().getFullYear() - 1995) - 1} anos, e mais de 6 anos de experiência no mercado, tenho proficiência tanto em desenvolvimento Back-End, quanto Front-End, e amplo conhecimento em novas tecnologias, como React ou Angular, Front-End, e Laravel no Back-End, não busco nada além de uma oportunidade de fazer a diferença, venho de uma bibliografia de aprendizado que foca no desenvolvimento responsável, e eficiente tendo como ênfase, não só desenvolver mais também a concepção de ideias dentro dos projetos, como todo e qualquer analista de dados, visto que a premissa de qualquer desenvolvedor é ver o projeto dar certo, como qualquer artífice para com sua obra.
            <br /><br />
            Caso tenha interesse, me venha falar comigo, estou sempre analisando propostas, afinal de contas em um mundo conectado via web, uma boa conversa não custa mais que um click.
          </p>
          <button className="about.header.curriculum flex content-center items-center justify-center lg:hidden md:flex">
            <span className="about.header.curriculum.icon" ><i className="icon-cheveron-down"></i></span> Download
          </button>
        </div>
      </section>
    </div>
  </section>
  <style jsx>{`
    .about {
      background-color: var(--color-pink);
      border-radius: 0 0 320px 0;
      padding: 15vh 0;
      position: relative;
    }  

    .about\.header\.title {
      color: var(--color-blue);
    }

    .about\.header\.curriculum {
      padding: 10px 30px;
      background-color: var(--color-violet);
      border-radius: 40px 0 40px 0;
      color: var(--color-red);
      font-weight: 200;
      font-family: var(--font-variant);
      transition: ease 220ms all;
    }

    .about\.header\.curriculum:hover {
      background-color: var(--color-blue-light);
      color: var(--color-violet);
    }

    .about\.header\.curriculum\.icon {
      background-color: var(--color-red);
      transition: ease 220ms all;
      color: var(--color-white);
      border-radius: 100%;
    }

    .about\.header\.curriculum:hover .about\.header\.curriculum\.icon {
      background-color: var(--color-violet);
      color: var(--color-blue-light);
    }

    .about\.header\.text {
      font-weight: 300;
      color: var(--color-blue);
      font-family: var(--font-variant);
      text-align: justify;
    }

    .about\.content {
      position: relative;
      z-index: 9;
    }

    @media only screen and (max-width: 640px) {
      .about {
        padding: 25vh 0;
        border-radius: 0 0 160px 0;
      }

      .about\.header,
      .about\.body {
        padding: 0 10px;  
      }

      .about\.header\.title {
        font-size: var(--font-size-title-st)
      } 

      .about\.header\.curriculum {
        margin-top: 30px;
        font-size: var(--font-size-default-st);
      }

      .about\.header\.curriculum\.icon {
        width: 20px;
        height: 20px;
        margin: 0 15px 0 0;
        line-height: 24px;
      }

      .about\.header\.text {
        font-size: var(--font-size-default-st);
      }
    }
    
    @media only screen and (min-width: 640px) {
      .about\.header\.title {
        font-size: var(--font-size-title-sm)
      } 

      .about\.header\.curriculum {
        margin-top: 30px;
        font-size: var(--font-size-default-sm);
      }

      .about\.header\.curriculum\.icon {
        width: 20px;
        height: 20px;
        margin: 0 15px 0 0;
        line-height: 24px;
      }

      .about\.header\.text {
        font-size: var(--font-size-default-sm);
      }
    }
    
    @media only screen and (min-width: 768px) {
      .about\.header\.title {
        font-size: var(--font-size-title-md)
      } 

      .about\.header\.curriculum {
        margin-top: 40px;
        font-size: var(--font-size-menu-lg);
      }

      .about\.header\.curriculum\.icon {
        width: 30px;
        height: 30px;
        margin: 0 15px 0 0;
        line-height: 36px;
      }

      .about\.header\.text {
        font-size: var(--font-size-default-md);
      }
    }

    @media only screen and (min-width: 1024px) {
      .about\.header\.title {
        font-size: var(--font-size-title-lg)
      } 

      .about\.header\.curriculum {
        margin-top: 90px;
        font-size: var(--font-size-default-lg);
      }

      .about\.header\.curriculum\.icon {
        width: 30px;
        height: 30px;
        margin: 0 15px 0 0;
        line-height: 36px;
      }

      .about\.header\.text {
        font-size: var(--font-size-menu-lg);
      }
    }
  `}</style>
  </>)  
};

export default AboutHooks;