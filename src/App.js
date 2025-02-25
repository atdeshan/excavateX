import React,{useRef} from 'react';
import Model from './pages/home';
import Pricing from './pages/pricing';
import About from './pages/about';
import Navbar from './components/navigationbar';
import Footer from './components/footer';
import './App.css';

function App() {
  
  const navbarRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const priceRef = useRef(null);
  const scrollToSection = (section) => {
    
    const element =
      section === "home" ? homeRef.current :
      section === "about" ? aboutRef.current :
      section === "prices" ? priceRef.current : null;

    if (element) {
      const navbarHeight =  120;
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: "smooth"
      });
    }
  };
  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <div ref={homeRef}>
        <Model />
      </div>
      
      <div ref={priceRef}>
        <Pricing /> 
      </div>
      <div ref={aboutRef}>
        <About />
      </div> 
      <Footer
      />

    </div>
  );
}

export default App;
