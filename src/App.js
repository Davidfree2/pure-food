import { useEffect, useState } from 'react';

import Lottie from 'lottie-react';
import orange from './Lotties/walking_orange.json';


import HeroBackground from './Components/HeroBackground.js';
import Nav from './Components/Nav.js';
import About from './Components/About.js';
import Action from './Components/Action.js';
import Carousel from './Components/Carousel.js';
import Carousel2 from './Components/Carousel2.js';
import Greet from './Components/Greet.js';
import Popular from './Components/Popular.js';
import Quote from './Components/Quote.js';
import Form from './Components/Form.js';
import Footer from './Components/Footer.js';

/*make sure to add greet component and hero background*/


function App() {

    const [doneLoading, setLoading] = useState(false);


    useEffect(() => {
        setTimeout(() => setLoading(true), 2000)
    }, [])



    return (
    doneLoading ? (
      <>
        <Nav />
        <HeroBackground />
        <Action />
        <Carousel />
        <About />
        <Popular />
        <Quote />
        <Greet />
        <Form />
        <Carousel2 />
        <Footer />
      </>
    ) : (
        <div class='flex items-center justify-center h-screen w-full'>
            <Lottie class='w-1/4' animationData={orange} loop={true} autoplay={true} />
        </div>
    )
  );
}

export default App;
