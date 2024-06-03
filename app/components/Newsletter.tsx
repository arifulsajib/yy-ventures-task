"use client";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
      console.log("Email submitted:", email);
    } else {
      setError("Please enter a valid email address.");
    }
  };

  return (
    <section className="py-20 text-center">
      <p className="text-sm font-bold text-lightgreen-color">Newsletter</p>
      <h1 className="text-2xl font-bold text-deepblue-color my-3">Watch our Courses</h1>
      <p className="text-sm text-lightgrey-color w-2/4 mx-auto lg:px-12">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
      <form className="flex justify-center items-center my-10" onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="py-2 px-5 lg:pe-24 border" />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <button type="submit" className="bg-lightgreen-color text-sm font-bold text-white py-2 px-5 ms-2">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
