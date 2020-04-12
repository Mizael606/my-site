let metatags = {
  author: "Mizael Silva Lemos - @Mizael606",
  description: (`Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi similique nobis reprehenderit placeat, explicabo ex sapiente quam magni voluptate laboriosam, assumenda id mollitia eius enim tenetur expedita quae ut perferendis.
  Suscipit deserunt sint voluptatibus fugit dolor eius, eveniet officiis vitae at ullam nulla odio aliquid rem error similique. Impedit nemo eligendi dolorum molestiae incidunt consectetur architecto natus iusto provident accusantium.
  Vitae inventore eius, quis nulla optio deleniti exercitationem natus est deserunt sunt! Tempore, minus ab ratione provident ex quam laboriosam eaque laborum beatae quidem nostrum quos non velit facilis sapiente.
  Dicta voluptates exercitationem odit, excepturi asperiores tempora odio perferendis nihil dolor nemo placeat adipisci vel praesentium accusantium voluptatum veniam minima eaque repellendus sunt in labore mollitia nulla. Cumque, ab illo?`),
  keywords: ['Desenvolvedor', 'Front-End'],
  image: "",
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
    <meta property="og:image" content={ metatags.image } />
    <meta property="og:url" content={`http://${ metatags.host }/`} />
    <meta name="twitter:title" content={ metatags.author } />
    <meta name="twitter:description" content={ metatags.description } />
    <meta name="twitter:image" content={ metatags.image } />
    <meta name="twitter:card" content="summary_large_image" />
  </>
);

export default meta;