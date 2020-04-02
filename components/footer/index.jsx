const FooterHooks = (props) => {

  return (<>
    <section className="footer lg:w-full">
      <header className="footer.header lg:w-10/12 md:w-11/12 mr-auto ml-auto">
        <h4 className="footer.header.title text-center">
          Work together with me ?
        </h4>
        <p className="footer.header.subtitle text-center">
          Simply call or drop a message
        </p>

        <button className="footer.header.contactme mr-auto ml-auto">
          HIRE ME
        </button>
      </header>
      <section className="footer.body lg:w-10/12 md:w-11/12  sm:w-11/12 mr-auto ml-auto flex flex-wrap justify-center item-center">
        <div className="lg:w-3/12 md:w-3/12 sm:w-full w-full" >
          <h4 className="footer.body.number text-center">
            11 9 5923 5367
          </h4>
        </div>
        <div className="lg:w-4/12 md:w-4/12 sm:w-full w-full" >
          <ul className="footer.body.social flex ml-auto mr-auto justify-center item-center">
            <li className="w-4/12 text-center" >
              <a href="#" className="footer.body.social.icon">
                <i className="icon-github"></i>
              </a>
            </li>
            <li className="w-4/12 text-center" >
              <a href="#" className="footer.body.social.icon">
                <i className="icon-linkedin"></i>
              </a>
            </li>
            <li className="w-4/12 text-center" >
              <a href="#" className="footer.body.social.icon">
                <i className="icon-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:w-5/12 md:w-5/12 sm:w-full w-full text-center" >
          <a href="mailto: mizael.lemos.job@outlook.com" className="footer.body.link" >
            <span className="footer.body.link.label" >
              mizael.lemos.job@outlook.com
            </span>
          </a>
        </div>
      </section>
    </section>
    <style jsx>{`
      .footer {
        margin: 15vh 0;
        position: relative;        
      }

      .footer\.header {
        position: relative;
        z-index: 9;
      }

      .footer:before {
        content: "";
        display: block;
        background-color: var(--color-blue);
        border-top: solid 6px var(--color-red);
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
      }

      .footer\.header\.title,
      .footer\.header\.subtitle {
        color: var(--color-white);
      }

      .footer\.header\.subtitle {
        font-weight: 500;
      }

      .footer\.header\.contactme {
        font-family: var(--font-variant);
        border-radius: 40px 0 40px 0;
        background-color: rgba(255,255,255, 0.2);
        padding: 10px 40px;
        display: block;
        color: var(--color-white);
        font-weight: 200;
      }

      .footer\.body\.number,
      .footer\.body\.link\.label {
        color: var(--color-blue);
        font-weight: 900
      }

      @media only screen and (max-width: 640px) {

        .footer:before,
        .footer\.header {
          height: 300px;
        }

        .footer\.header {
          padding: 20vh 0;
        }

        .footer:before {
          border-radius: 0 0 160px 0;
        }

        .footer\.header\.title {
          font-size: var(--font-size-title-st)
        }

        .footer\.header\.subtitle {
          font-size: var(--font-size-default-st);
        }

        .footer\.header\.contactme {
          font-size: var(--font-size-default-st);
          margin-top: 40px;
        }

        .footer\.body {
          padding: 15vh 0 0;
        }

        .footer\.body\.number,
        .footer\.body\.link\.label,
        .footer\.body\.social\.icon {
          font-size: var(--font-size-subtitle-st);          
        }

        .footer\.body\.social {
          width: 240px;
          padding: 2vh 0;
        }

      }

      @media only screen and (min-width: 640px) {

        .footer:before,
        .footer\.header {
          height: 350px;
        }

        .footer\.header {
          padding: 10vh 0;
        }

        .footer:before {
          border-radius: 0 0 320px 0;
        }

        .footer\.header\.title {
          font-size: var(--font-size-title-st)
        }

        .footer\.header\.subtitle {
          font-size: var(--font-size-default-st);
        }

        .footer\.header\.contactme {
          font-size: var(--font-size-default-st);
          margin-top: 30px;
        }
       
        .footer\.body {
          padding: 5vh 0 0;
        }

        .footer\.body\.number,
        .footer\.body\.link\.label,
        .footer\.body\.social\.icon {
          font-size: var(--font-size-subtitle-sm);          
        }

        .footer\.body\.social {
          width: 260px;
          padding: 2vh 0;
        }

      }

      @media only screen and (min-width: 768px) {

        

        .footer:before,
        .footer\.header {
          height: 350px;
        }

        .footer\.header {
          padding: 80px 0;
        }

        .footer\.header\.title {
          font-size: var(--font-size-title-sm)
        }

        .footer\.header\.subtitle {
          font-size: var(--font-size-default-sm);
        }

        .footer\.header\.contactme {
          font-size: var(--font-size-default-sm);
          margin-top: 50px;
        }

        .footer\.body {
          padding: 15vh 0 0;
        }

        .footer\.body\.number,
        .footer\.body\.link\.label {
          font-size: var(--font-size-default-nn);          
        }

        .footer\.body\.social {
          width: 190px;
          padding: 0;
        }

        .footer\.body\.social\.icon {
          font-size: var(--font-size-default-lg);          
        }

      }

      @media only screen and (min-width: 1024px) {
        .footer:before,
        .footer\.header {
          height: 450px;
        }

        .footer:before {
          border-radius: 0 0 360px 0;
        }

        .footer\.header\.title {
          font-size: var(--font-size-title-md)
        }

        .footer\.header\.subtitle {
          font-size: var(--font-size-default-md);
        }

        .footer\.header\.contactme {
          font-size: var(--font-size-default-md);
        }

        .footer\.body\.number,
        .footer\.body\.link\.label,
        .footer\.body\.social\.icon {
          font-size: var(--font-size-subtitle-md);          
        }

        .footer\.body\.social {
          width: 240px;
        }

      }

      @media only screen and (min-width: 1800px) {
        
        .footer:before,
        .footer\.header {
          height: 600px;
        }

        .footer\.header\.title {
          font-size: var(--font-size-title-lg)
        }

        .footer\.header\.subtitle {
          font-size: var(--font-size-default-lg);
        }

        .footer\.header\.contactme {
          font-size: var(--font-size-default-lg);
        }

        .footer\.body\.number,
        .footer\.body\.link\.label,
        .footer\.body\.social\.icon {
          font-size: var(--font-size-title-md);          
        }

        .footer\.body\.social {
          width: 340px;
        }

      }

      `}</style>
  </>)

};

export default FooterHooks;