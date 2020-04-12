import Carousel from "../carousel/index";

const MessagesHook = props => {

  return (<>
    <section id="page-messages" className="message">
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
                  " Os que se encantam com a prática sem a ciência são como os timoneiros que entram no navio sem timão nem bússola, nunca tendo certeza do seu destino. "
                </h5>
              </header>
              <section className="message.box.body">
                <h5 className="message.box.body.author text-center">
                  Leonardo da Vinci
                </h5>
                <p className="message.box.body.title text-center">
                  Polímata
                </p>
              </section>
            </section>
            
            <section className="message.box">
              <header className="message.box.header">
                <h5 className="message.box.header.title text-center">
                  " Pouco conhecimento faz com que as pessoas se sintam orgulhosas. Muito conhecimento, que se sintam humildes. É assim que as espigas sem grãos erguem desdenhosamente a cabeça para o céu, enquanto que as cheias as baixam para a terra, sua mãe. "
                </h5>
              </header>
              <section className="message.box.body">
                <h5 className="message.box.body.author text-center">
                  Leonardo da Vinci
                </h5>
                <p className="message.box.body.title text-center">
                  Polímata
                </p>
              </section>
            </section>

            <section className="message.box">
              <header className="message.box.header">
                <h5 className="message.box.header.title text-center">
                  " Não é possível ser bom pela metade. "
                </h5>
              </header>
              <section className="message.box.body">
                <h5 className="message.box.body.author text-center">
                  Leon Tolstói
                </h5>
                <p className="message.box.body.title text-center">
                  Escritor
                </p>
              </section>
            </section>

            <section className="message.box">
              <header className="message.box.header">
                <h5 className="message.box.header.title text-center">
                  " A condição essencial para a felicidade é ser humano e dedicado ao trabalho. "
                </h5>
              </header>
              <section className="message.box.body">
              <h5 className="message.box.body.author text-center">
                  Leon Tolstói
                </h5>
                <p className="message.box.body.title text-center">
                  Escritor
                </p>
              </section>
            </section>

            <section className="message.box">
              <header className="message.box.header">
                <h5 className="message.box.header.title text-center">
                  " Inteligência é a habilidade de evitar fazer o trabalho, e mesmo assim conseguir ter o trabalho realizado. "
                </h5>
              </header>
              <section className="message.box.body">
                <h5 className="message.box.body.author text-center">
                  Linus Torvalds
                </h5>
                <p className="message.box.body.title text-center">
                  Engenheiro de Software
                </p>
              </section>
            </section>

            <section className="message.box">
              <header className="message.box.header">
                <h5 className="message.box.header.title text-center">
                  " Não creio que haja uma emoção, mais intensa para um inventor do que ver suas criações funcionando. Essa emoção faz você esquecer de comer, de dormir, de tudo. "
                </h5>
              </header>
              <section className="message.box.body">
              <h5 className="message.box.body.author text-center">
                  Nikola Tesla
                </h5>
                <p className="message.box.body.title text-center">
                  Inventor
                </p>
              </section>
            </section>

            <section className="message.box">
              <header className="message.box.header">
                <h5 className="message.box.header.title text-center">
                  " Creio firmemente em uma lei de compensação. As verdadeiras recompensas são sempre proporcionais ao esforço e aos sacrifícios feitos. "
                </h5>
              </header>
              <section className="message.box.body">
              <h5 className="message.box.body.author text-center">
                  Nikola Tesla
                </h5>
                <p className="message.box.body.title text-center">
                  Inventor
                </p>
              </section>
            </section>

          </Carousel>
        </section>
      </section>
    </section>    
    <style jsx>{`
      .message {
        padding: 0 0 15vh;
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
        .message {
          padding: 30px 0
        }

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