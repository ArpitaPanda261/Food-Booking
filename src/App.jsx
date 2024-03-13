import React, {useEffect} from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Dishes from "./Components/Dishes";
import Review from "./Components/Review";
import aos from "aos";
import "aos/dist/aos.css";

const App = () => {

  React.useEffect(() => {
    aos.init({
      offset: 200,
      duration: 700,
      easing: "ease-in-sine",
      delay: 200,
    });
    
  }, []);

  return (
    <div>
      <Navbar />

      <main >
        <div id="home"
          data-aos = "fade-up"
          data-aos-duration = "800"
          data-aos-once = "true"
        >
          <Home />
        </div>

        <div id="dishes"
        data-aos = "fade-up"
        data-aos-duration = "800"
        data-aos-once = "true"
      >
          <Dishes />
        </div>

        <div
          id="about"
          data-aos = "fade-up"
          data-aos-duration = "800"
          data-aos-once = "true"
        >
          <About />
          </div>
        

        <div 
        id="menu"
         data-aos = "fade-up"
          data-aos-duration = "800"
          data-aos-once = "true"
         >
          <Menu />
        </div>
        

        <div id="review"
        data-aos = "fade-up"
        data-aos-duration = "800"
        data-aos-once = "true"
        >
          <Review />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
