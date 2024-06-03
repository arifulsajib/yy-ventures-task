import styles from "../styles/features.module.css";
import svg1 from "../../public/012-blackboards.svg";
import svg2 from "../../public/013-telescope-1.svg";
import Image from "next/image";

const Features = () => {
  return (
    <section className="bg-white px-8 lg:px-[195px] py-12 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
        {/* left half */}
        <div>
          <div className="w-20 h-1 bg-maroon-color"></div>
          <h1 className="my-7 text-3xl lg:text-4xl font-bold text-deepblue-color">Approdable Packages</h1>
          <p className="text-lightgrey-color text-sm w-3/4">Problems trying to resolve the conflict between the two major realms of Classical physics: </p>
          <p className="text-lightgrey-color text-sm mb-7">Newtonian mechanics</p>
          <div className={`text-sm font-bold text-lightgreen-color flex items-center ${styles.arrowBtn}`}>
            <p>Learn More</p>
            <p className={`ms-1 ${styles.arrow}`}>&gt;</p>
          </div>
        </div>
        {/* right half */}
        <div className="grid grid-cols-2 gap-3">
          <div className="shadow-lg p-5">
            <div className="w-[70px] h-[70px] bg-lightgreen-color flex items-center justify-center rounded">
              <Image src={svg1} alt="svg1" width={32} height={32} />
            </div>
            <h5 className="text-lg font-bold text-deepblue-color my-3">Certified Teacher</h5>
            <div className="w-20 h-0.5 bg-maroon-color"></div>
            <p className="w-3/4 text-lightgrey-color my-4">The gradual accumulation of information about </p>
          </div>
          <div className="shadow-lg p-5">
            <div className="w-[70px] h-[70px] bg-lightgreen-color flex items-center justify-center rounded">
              <Image src={svg2} alt="svg2" width={32} height={32} />
            </div>
            <h5 className="text-lg font-bold text-deepblue-color my-3">Expert instruction</h5>
            <div className="w-20 h-0.5 bg-maroon-color"></div>
            <p className="w-3/4 text-lightgrey-color my-4">The gradual accumulation of information about </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
