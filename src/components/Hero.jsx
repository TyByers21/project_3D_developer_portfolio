import { motion } from "framer-motion";
import 'boxicons';
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
            Ty Byers <span className='text-[#915EFF]'></span>
          </h1>
          <h3 className="text-animation">I'm a <span></span></h3>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Step into a world where technology meets artistry, and innovation unfolds through code and motion. Turning ideas into visually stunning products is my passion. <br className='sm:block hidden' />
            interfaces and web applications
          </p>
          <div className="social-icons">
            <a href="#"><box-icon name='linkedin-square' type='logo' color='#ffffff' ></box-icon></a>
            <a href="#"><box-icon type='logo' name='github'></box-icon></a>
            <a href="#"><box-icon type='logo' name='instagram-alt'></box-icon></a>
            
           
          </div>
          <div className="btn-group">
            <a href="#" className="btn">Hire</a>
            <a href="#" className="btn">Contact</a>
          </div>
          </div>
          <div className="home-img">
            <img src="avatar2.png" alt="" />
          
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
