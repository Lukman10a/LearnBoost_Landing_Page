import React from "react";

const Programme = () => {
  return (
    <section className="bg-[#7061E2] py-20 text-white p-10 space-y-5">
      <div className="text-center mb-10">
        <h1 className="font-medium text-4xl md:font-semibold md:text-6xl lg:font-bold font[Plus Jakarta Sans] ">
          Join our Affiliate Program
        </h1>
        <p className="font-light text-sm md:font-medium md:text-lg">
          Join our affiliate program and become a part of the LearnBoost success
          story! <br /> As an affiliate partner, you can earn generous
          commissions while promoting our <br /> innovative learning mobile app
          to your audience.
        </p>
      </div>
      <div className="flex items-center justify-center mb-5">
        <form className="flex items-center space-x-4 rounded-md px-4 py-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-none px-2 py-2 focus:ring-0 round-sm w-full"
          />
          <button className="bg-[#2B2828] text-white px-4 py-2 rounded-md">
            Subscribe
          </button>
        </form>
      </div>
      <p className="text-center">
        *Terms and conditions apply. LearnBoost reserves the right to modify the
        affiliate program at any time.
      </p>
    </section>
  );
};

export default Programme;
