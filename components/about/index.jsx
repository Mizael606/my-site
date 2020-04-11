const AboutHooks = props => {
  return (<><section id="page-about" className="w-full about">
    <div className="about.content xl:w-10/12 md:w-11/12 sm:w-11/12 w-full flex flex-wrap content-center items-center justify-center mr-auto ml-auto">
      <aside className="about.header lg:w-4/12 md:w-full sm:w-11/12 w-11/12" >
        <header className="xl:w-full lg:w-full md:w-full sm:w-10/12 w-full mr-auto ml-auto py-4">
          <h4 className="about.header.title">
            My<br />
            Biography
          </h4>
          <button className="about.header.curriculum flex content-center items-center justify-center lg:flex sm:hidden hidden">
            <span className="about.header.curriculum.icon" ><i className="icon-cheveron-down"></i></span> Download
          </button>
        </header>      
      </aside>
      <section className="about.body lg:w-8/12 md:w-full sm:w-11/12 w-11/12">
        <div className="lg:w-10/12 md:w-full sm:w-10/12 mr-auto ml-auto w-full">
          <p className="about.header.text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, voluptates nesciunt. Incidunt ipsum, temporibus, repellat dolor tempora porro minus dolorem reiciendis nesciunt similique quia suscipit quos, laborum rerum ut at!
            Harum minus magnam quasi ipsam inventore voluptatem aliquam aperiam incidunt, voluptatum reprehenderit nostrum doloribus quos error impedit officiis nesciunt quas praesentium id? Voluptates placeat optio necessitatibus provident. Repellendus, iste ut.
            Itaque ut quibusdam reprehenderit sunt iste nam ea enim quam! Fuga consectetur nobis, cumque maxime, rerum suscipit odit ut voluptatibus dignissimos rem accusamus. Repellendus, pariatur quae nihil quam nisi enim.
            <br /><br />
            Culpa nam hic qui asperiores et illo. Veniam quidem qui nemo? Dolorem recusandae laudantium nostrum, explicabo dolores iste nulla vero, illum, aut nesciunt delectus voluptatum! Quis, dicta ipsam. Reprehenderit, dignissimos.
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