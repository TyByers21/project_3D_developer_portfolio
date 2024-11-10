
import 'boxicons';
import { ReactTyped } from "react-typed";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="home-content">
          <h1 className={`${styles.heroHeadText} orange-text-gradient`}>
            Ty Byers 
          </h1>
          <h3 className="">I'm a <span className="orange-text-gradient"> 
            <ReactTyped
              strings={[
                "Designer...",
                "Developer...",
                "Dreamer...",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
               >
              
            </ReactTyped>
            </span>

          </h3>
          <p className='mt-2 text-white-200'>
            Step into a world where technology meets artistry, and innovation unfolds through code and motion. Turning ideas into visually stunning products is my passion. <br className='sm:block hidden' />
          
          </p>

          <div className="btn-group mt-5">
            <a href="#projects" className="btn">View My Portfolio</a>
            <a href="#contact" className="btn">Contact</a>
          </div>
          <div className="social-icons">
            <a className="ml-44" href="#"><box-icon name='linkedin-square' type='logo' color='#000000' ></box-icon></a>
            <a className="ml-10" href="#"><box-icon type='logo' name='github'></box-icon></a>
            <a className="ml-10" href="#"><box-icon type='logo' name='instagram-alt'></box-icon></a>


          </div>
        </div>
        <div className="home-img">
          <img src="avatar2.png" alt="" />
        </div>
      </div>

      {/* <ComputersCanvas /> */}


    </section>
  );
};

export default Hero;
