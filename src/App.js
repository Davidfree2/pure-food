import HeroBackground from './Components/HeroBackground.js';
import Nav from './Components/Nav.js';
import About from './Components/About.js';
import Action from './Components/Action.js';
import Carousel from './Components/Carousel.js';
import Greet from './Components/Greet.js';
import Popular from './Components/Popular.js';
import Quote from './Components/Quote.js';
import Form from './Components/Form.js';
import Footer from './Components/Footer.js';

/*make sure to add greet component and hero background*/


function App() {
  return (
      <>
        <Nav />
        <Action />
        <Carousel />
        <About />
        <Popular />
        <Quote />
        <Form />
        <Footer />
      </>
  );
}

export default App;
