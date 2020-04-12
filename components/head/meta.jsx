let metatags = {
  author: "Mizael Silva Lemos - @Mizael606",
  description: (`Meu nome é Mizael, tenho 25 anos, e mais de 6 anos de experiência no mercado, tenho proficiência tanto em desenvolvimento Back-End, quanto Front-End, e amplo conhecimento em novas tecnologias, como React ou Angular, Front-End, e Laravel no Back-End, não busco nada além de uma oportunidade de fazer a diferença, venho de uma bibliografia de aprendizado que foca no desenvolvimento responsável, e eficiente tendo como ênfase, não só desenvolver mais também a concepção de ideias dentro dos projetos, como todo e qualquer analista de dados, visto que a premissa de qualquer desenvolvedor é ver o projeto dar certo, como qualquer artífice para com sua obra.
  \n\n
  Caso tenha interesse, me venha falar comigo, estou sempre analisando propostas, afinal de contas em um mundo conectado via web, uma boa conversa não custa mais que um click.
  `),
  keywords: ['Desenvolvedor', 'Front-End'],
  image: "/assets/images/social-banner.png",
  host: ( !process.env.BROWSER ) ? "" : window.location.hostname
};

const meta = () => (
  <>
    <meta name="author" content={ metatags.author } />
    <meta name="description" content={ metatags.description } />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content={ metatags.keywords.reduce((returnString, v) => (returnString + ", " + v)) } />	
    <meta http-equiv="content-language" content="pt-br" />
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta name="copyright" content={`© ${new Date().getFullYear()} - ${metatags.author}`} />
    <meta property="og:title" content={ metatags.author } />
    <meta property="og:description" content={ metatags.description } />
    <meta property="og:image" content={ `https://${ metatags.host }${metatags.image}` } />
    <meta property="og:url" content={`https://${ metatags.host }/`} />
    <meta name="twitter:title" content={ metatags.author } />
    <meta name="twitter:description" content={ metatags.description } />
    <meta name="twitter:image" content={ metatags.image } />
    <meta name="twitter:card" content="summary_large_image" />
  </>
);

export default meta;