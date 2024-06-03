import locationImg from "../../public/location.svg";
import phoneImg from "../../public/contact.svg";
import emailImg from "../../public/email.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white px-8 lg:px-[195px] py-4 lg:py-6">
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
        <div>
          <h4 className="text-lg font-bold mb-3">Company Info</h4>
          <p className="text-sm text-lightgrey-color font-bold">About Us</p>
          <p className="text-sm text-lightgrey-color font-bold my-2">Carrier</p>
          <p className="text-sm text-lightgrey-color font-bold my-2">We are hiring</p>
          <p className="text-sm text-lightgrey-color font-bold">Blog</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-3">Legal</h4>
          <p className="text-sm text-lightgrey-color font-bold">About Us</p>
          <p className="text-sm text-lightgrey-color font-bold my-2">Carrier</p>
          <p className="text-sm text-lightgrey-color font-bold my-2">We are hiring</p>
          <p className="text-sm text-lightgrey-color font-bold">Blog</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-3">Features</h4>
          <p className="text-sm text-lightgrey-color font-bold">Business Marketing</p>
          <p className="text-sm text-lightgrey-color font-bold my-2">User Analytic</p>
          <p className="text-sm text-lightgrey-color font-bold my-2">Live Chat</p>
          <p className="text-sm text-lightgrey-color font-bold">Unlimited Support</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-3">Resources</h4>
          <p className="text-sm text-lightgrey-color font-bold">IOS & Android</p>
          <p className="text-sm text-lightgrey-color font-bold my-2">Watch a Demo</p>
          <p className="text-sm text-lightgrey-color font-bold my-2">Customers</p>
          <p className="text-sm text-lightgrey-color font-bold">API</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-3">Get In Touch</h4>
          <div className="flex items-center">
            <Image src={phoneImg} alt="location" width={22} height={22} />
            <p className="ms-1 text-sm text-lightgrey-color font-bold">(480) 555-0103</p>
          </div>
          <div className="flex items-center">
            <Image src={locationImg} alt="location" width={22} height={22} />
            <p className="ms-1 text-sm text-lightgrey-color font-bold my-2">4517 Washington Ave. Manchester, Kentucky 39495</p>
          </div>
          <div className="flex items-center">
            <Image src={emailImg} alt="location" width={22} height={22} />
            <p className="ms-1 text-sm text-lightgrey-color font-bold my-2">debra.holt@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
