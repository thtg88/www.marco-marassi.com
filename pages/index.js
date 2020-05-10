import Head from 'next/head';
import { Link } from 'react-scroll';
import About from '../components/About';
import Contact from '../components/Contact';

const siteTitle = 'Marco Marassi - Web Developer';
const siteDescription = 'Web Developer based in Bristol, UK, with experience in Laravel, PHP, ReactJS, Angular, JavaScript, jQuery, AJAX, and SQL (MySQL and SQL Server).';
const themeColour = '#007bff';

function Home() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="d7oFhlVR10ggoJbGqVJZfu9YnpT30s2fxH_z1yLKuWw"
        />
        <meta name="description" content={siteDescription} />
        <meta name="author" content="Marco Marassi" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content="/icon.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image:alt" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content="/icon.png" />
        <meta property="og:url" content="/" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content={themeColour} />
        <meta name="theme-color" content={themeColour} />
        <title>{siteTitle}</title>
        <script type="application/ld+json">{`{
"@context": "http://schema.org",
"@type": "Person",
"name": "Marco Marassi",
"familyName": "Marassi",
"givenName": "Marco",
"gender": "Male",
"nationality": "Italy",
"jobTitle": "Back-end Web Developer",
"knowsLanguage": [
  "it-IT",
  "en-GB",
  "es-ES",
  "fr-FR"
],
"worksFor": {
  "name": "Simpleweb",
  "url": "https://simpleweb.co.uk"
},
"image": "/icon.png",
"sameAs": [
  "https://www.linkedin.com/in/marco-marassi",
  "https://www.instagram.com/thtg88",
  "https://github.com/thtg88"
]
}`}</script>
      </Head>
      <div className="root-container">
        <header
          id="top"
          className="header"
          title="Picture taken at: Cala Blanca, Ciutadella de Menorca, Spain."
        >
          <div className="text-vertical-center">
          <h1>Hi, I'm Marco Marassi.</h1>
          <h3>Web Developer by day, Sleeper by night.</h3>
          <p>What did you think I was? A superhero or something?</p>
          <div>
          <img
            src="/icon.png"
            alt="Icon Logo"
            title="This looks like my face."
            className="img-fluid img-circle d-inline-block profile-icon"
          />
          </div>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              className="btn btn-dark btn-lg text-white"
            >
              But wait, there's more!
            </Link>
          </div>
        </header>
        <About name="about" />
        <Contact />
      </div>
    </>
  );
}

export default Home;
