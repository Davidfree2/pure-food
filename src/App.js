import HeroBackground from './Components/HeroBackground.js';
import Nav from './Components/Nav.js';
import About from './Components/About.js';
import Action from './Components/Action.js';
import Carousel from './Components/Carousel.js';
import Greet from './Components/Greet.js';
import Popular from './Components/Popular.js';
import Quote from './Components/Quote.js';

/*make sure to add greet component and hero background*/


function App() {
  return (
      <>
        <Nav />
        <HeroBackground />
        <Action />
        <Carousel />
        <About />
        <Popular />
        <Greet />
        <Quote />
      </>
  );
}

export default App;
