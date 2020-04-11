const JobsHooks = props => {
  return (<>
    <section className="jobs w-full">
      <header id="page-jobs" className="jobs.header w-full">
        <div className="jobs.header.content lg:w-10/12 md:w-11/12 sm:w-10/12 w-11/12 mr-auto ml-auto">
          <div className="jobs.header.line md:w-full sm:w-11/12 w-full mr-auto ml-auto">
            <h2 className="jobs.header.title md:w-full sm:w-11/12 mr-auto ml-auto">
              My Latest Work
            </h2>
          </div>
        </div>
      </header>
      <section className="jobs.header.list flex sm:justify-end justify-center items-center">
        <section className="jobs.header.list.body flex flex-wrap sm:w-11/12 w-10/12 sm:justify-end justify-center items-center">
          <div className="jobs.header.list.item md:w-3/12 sm:w-6/12 w-11/12 flex md:justify-end sm:justify-center ">
            <div className="jobs.header.list.item.body md:w-10/12 sm:w-8/12">
              <figure className="jobs.header.list.item.figure">
                <img src="assets/images/attachment.jpg" alt="" className="jobs.header.list.item.image" />
              </figure>
            </div>
          </div>
          <div className="jobs.header.list.item md:w-3/12 sm:w-6/12 w-11/12 flex md:justify-end sm:justify-center ">
            <div className="jobs.header.list.item.body md:w-10/12 sm:w-8/12">
              <figure className="jobs.header.list.item.figure">
                <img src="assets/images/BitCoin2.png" alt="" className="jobs.header.list.item.image" />
              </figure>
            </div>
          </div>
          <div className="jobs.header.list.item md:w-3/12 sm:w-6/12 w-11/12 flex md:justify-end sm:justify-center ">
            <div className="jobs.header.list.item.body md:w-10/12 sm:w-8/12">
              <figure className="jobs.header.list.item.figure">
                <img src="assets/images/preview.png" alt="" className="jobs.header.list.item.image" />
              </figure>
            </div>
          </div>
          <div className="jobs.header.list.item md:w-3/12 sm:w-6/12 w-11/12 flex md:justify-end sm:justify-center">
            <div className="jobs.header.list.item.body md:w-10/12 sm:w-8/12">
              <figure className="jobs.header.list.item.figure">
                <img src="assets/images/preview_agency.png" alt="" className="jobs.header.list.item.image" />
                <i className="icon-arrow-right"></i>
              </figure>
            </div>
          </div>
        </section>
      </section>
    </section>
    <style jsx>{`
      .jobs {
        padding: 15vh 0 0;
      }

      .jobs\.header {
        position: relative;
      }

      .jobs\.header:before {
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        content: "";
        display: block;
        background-color: var(--color-red);
        border-radius: 320px 0 0;
      }

      .jobs\.header\.title {
        color: var(--color-white);
      }

      .jobs\.header\.content {
        position: relative;
        z-index: 9;
        padding: 5px 0;
      }

      .jobs\.header\.list {
        z-index: 9;
        position: relative;
      }

      .jobs\.header\.list\.item\.figure {
        overflow: hidden;
        cursor: pointer;
      }

      .jobs\.header\.list\.item\.image {
        max-width: 80vw;
      }

      .jobs\.header\.list\.item:last-child .jobs\.header\.list\.item\.figure:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;  
        opacity: 0.95;
        background-color: var(--color-violet);
      }

      .jobs\.header\.list\.item\.figure:last-child {
        position: relative;
      }

      .jobs\.header\.list\.item\.figure,
      .jobs\.header\.list\.item\.figure:last-child::before {
        width: 100%;
        border-radius: 3px;
      }

      .jobs\.header\.list\.item\.figure i {
        position: absolute;
        left: 0;
        right: 0;
        display: block;
        top: 50%;
        margin: 0 auto;
        text-align: center;
        color: var(--color-white);
      }

      @media only screen and (max-width: 640px) {
        .jobs\.header,
        .jobs\.header:before {
          height: 200px;
        }

        .jobs\.header:before {
          border-radius: 160px 0 0 0;
        }

        .jobs\.header\.content {
          padding: 80px 10px 0;
        }

        .jobs\.header\.title {
          font-size: var(--font-size-title-st);
        }

        .jobs\.header\.list {
          top: -60px;          
        }

        .jobs\.header\.list\.item\.figure,
        .jobs\.header\.list\.item\.figure:last-child::before {
          height: 200px;          
        }

        .jobs\.header\.list\.item\.figure {
          margin-bottom: 30px;
        }

        .jobs\.header\.list\.item\.figure i {
          margin-top: -15px;
          width: 30px;
          height: 30px;
          line-height: 30px;
          font-size: var(--font-size-subtitle-st);
        }

      }

      @media only screen and (min-width: 640px) {
        .jobs\.header,
        .jobs\.header:before {
          height: 300px;
        }

        .jobs\.header\.content {
          padding-top: 160px;
        }

        .jobs\.header\.title {
          font-size: var(--font-size-title-sm);
        }

        .jobs\.header\.list {
          top: -40px;          
        }
        
        .jobs\.header\.list\.item\.figure,
        .jobs\.header\.list\.item\.figure:last-child::before {
          height: 140px;          
        }

        .jobs\.header\.list\.item\.figure {
          margin-bottom: 30px;
        }

        .jobs\.header\.list\.item\.figure i {
          margin-top: -20px;
          width: 40px;
          height: 40px;
          line-height: 40px;
          font-size: var(--font-size-subtitle-nn);
        }

      }

      @media only screen and (min-width: 768px) {
        .jobs\.header,
        .jobs\.header:before {
          height: 240px;
        }

        .jobs\.header\.content {
          padding-top: 120px;
        }

        .jobs\.header\.list {
          top: -20px;          
        }

        .jobs\.header\.title {
          font-size: var(--font-size-title-md);
        }

        .jobs\.header\.list\.item\.figure,
        .jobs\.header\.list\.item\.figure:last-child::before {
          height: 140px;          
        }

        .jobs\.header\.list\.item\.figure i {
          margin-top: -20px;
          width: 40px;
          height: 40px;
          line-height: 40px;
          font-size: var(--font-size-subtitle-sm);
        }
      }
      
      @media only screen and (min-width: 1024px) {
        .jobs\.header,
        .jobs\.header:before {
          height: 280px;
        }

        .jobs\.header\.content {
          padding-top: 100px;
        }

        .jobs\.header\.list {
          top: -30px;          
        }

        .jobs\.header\.title {
          font-size: var(--font-size-title-lg);
        }

        .jobs\.header\.list\.item\.figure,
        .jobs\.header\.list\.item\.figure:last-child::before {
          height: 180px;          
        }

        .jobs\.header\.list\.item\.figure i {
          margin-top: -20px;
          width: 40px;
          height: 40px;
          line-height: 40px;
          font-size: var(--font-size-subtitle-md);
        }

      }

      @media only screen and (min-width: 1800px) {
        .jobs\.header,
        .jobs\.header:before {
          height: 380px;
        }

        .jobs\.header\.content {
          padding-top: 100px;
        }

        .jobs\.header\.list {
          top: -80px;
        }

        .jobs\.header\.list\.item\.figure,
        .jobs\.header\.list\.item\.figure:last-child::before {
          height: 300px;          
        }

        .jobs\.header\.list\.item\.image {
          min-height: 300px;
        }

        .jobs\.header\.list\.item\.figure i {
          margin-top: -30px;
          width: 60px;
          height: 60px;
          line-height: 60px;
          font-size: var(--font-size-subtitle-lg);
        }

        .jobs\.header\.list\.item\.image {
          max-width: 100%;
        }

      }
    `}</style>
  </>);
}

export default JobsHooks;