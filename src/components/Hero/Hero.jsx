import carPng from "../../assets/car.png";
import car1Png from "../../assets/car1.png";

const Hero = () => {
  return (
    <div className="dark:bg-black dark:text-white light:bg-white light:text-black duration-300">
      <div className="container min-h-[620px]">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div className="order-1 sm:order-2">
            <img src={carPng} alt="" />
          </div>
          <div className="order-2 sm:order-1">
            <p>Effortless</p>
            <h1>Car Rental</h1>
            <p>
              Lorem ipsum dolor sit amet consece adispinfs elit. Inasdnio
              sndjadj voulptate mollitia. Nulla, disgnsissmos consqetuneur!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
