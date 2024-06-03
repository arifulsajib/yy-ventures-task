import Image from "next/image";
import bannerImg from "../../public/hero-cover-1.png";

const Banner = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="ps-0 text-center lg:text-start lg:ps-[132px] order-2 lg:order-1">
          <p className="text-lg text-lightgreen-color mb-7 font-bold">Welcome</p>
          <h1 className="text-6xl text-deepblue-color font-bold">Best Learning </h1>
          <h1 className="text-6xl text-deepblue-color font-bold my-3 mb-5">Opportunities</h1>
          <p className="text-xl mb-5 lg:w-2/4 text-lightgrey-color">Our goal is to make online education work for everyone</p>
          <div className="flex">
            <button className="bg-lightgreen-color text-sm font-bold text-white py-2 px-5">Join Us</button>
            <button className="border border-lightgreen-color text-sm font-bold text-lightgreen-color py-2 px-5 ms-3 hover:bg-lightgreen-color hover:text-white">Learn More</button>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <Image src={bannerImg} alt="banner" width={560} height={660} className="object-cover w-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
