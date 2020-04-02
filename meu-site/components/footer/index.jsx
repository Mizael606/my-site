const FooterHooks = (props) => {

  return (<>
    <section className="footer lg:w-full">
      <header className="footer.header lg:w-10/12 mr-auto ml-auto">
        <h4 className="footer.header.title">
          Work together with me ?
        </h4>
        <p className="footer.header.subtitle">
          Simply call or drop a message
        </p>

        <button className="footer.header.contactme">
          HIRE ME
        </button>
      </header>
      <section className="footer.body lg:w-10/12 mr-auto ml-auto flex">
        <div className="lg:w-4/12" >
          <h4 className="footer.body.number">
            11 9 5923 5367
          </h4>
        </div>
        <div className="lg:w-4/12" >
          <ul className="footer.body.social flex">
            <li className="w-4/12" >
              <i className="icon-github"></i>
            </li>
            <li className="w-4/12" >
              <i className="icon-linkedin"></i>
            </li>
            <li className="w-4/12" >
              <i className="icon-instagram"></i>
            </li>
          </ul>
        </div>
        <div className="lg:w-4/12" >
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
        padding: 15vh 0;
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
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
      }

      @media only screen and (min-width: 1800px) {
        
        .footer:before {
          height: 600px;
          border-radius: 0 0 360px 0;
        }

        .footer\.header {
          height: 600px;
        }

      }

      `}</style>
  </>)

};

export default FooterHooks;