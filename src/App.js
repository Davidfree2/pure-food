import HeroBackground from './Components/HeroBackground.js';
import Nav from './Components/Nav.js';
import About from './Components/About.js';
import Action from './Components/Action.js';
import Carousel from './Components/Carousel.js';
import Greet from './Components/Greet.js';
import Popular from './Components/Popular.js';



function App() {
  return (
      <>
        <Nav />
        <HeroBackground />
        <About />
        <Carousel />
        <Action />
        <Greet />
        <Popular />
      </>
  );
}

export default App;
