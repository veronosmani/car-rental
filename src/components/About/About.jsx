import CarPng from "../../assets/car1.png";

const About = () => {
  return (
    <div className="dark:bg-dark dark:text-white bg-slate-100 light:text-black duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1000" data-aos-once="false">
            <img className="sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]" src={CarPng} alt=""></img>
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6 font-bold font-serif">
              <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-serif">
                About us
              </h1>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adispisicing elit. Nihil
                tempore atque ut doloremque est.
              </p>
            
              <p data-aos="fade-up">
                Lorem ipsum dolor sit, amet consectetur adispicing elit.
                Aliquid, ratione.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
