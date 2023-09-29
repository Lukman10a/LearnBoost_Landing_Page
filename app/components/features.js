"use client";

import Image from "next/image";
import expertnew from "../../public/expertnew.png";
import learnnew from "../../public/learnnew.png";
import support from "../../public/support.png";
import { useState } from "react";

const FEATURE_DATA = [
  {
    title: " Expert Instructors",
    img: expertnew,
    subtitle:
      "Whether you want to dive into Mathematics, explore Creativity, boost your language proficiency, LearnBoost has got you covered.",
  },
  {
    title: "Learn  Anywhere",
    img: learnnew,
    subtitle:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    title: "Suporting",
    img: support,
    subtitle:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  },
];

const Features = () => {
  const [featureData, setFeatureData] = useState(FEATURE_DATA);
  return (
    <section className="p-5 py-15 md:p-10 py-10">
      <div className="text-center md:text-left p-12 space-y-4">
        <h1 className="font-medium text-4xl md:font-semibold md:text-6xl lg:font-bold font[Plus Jakarta Sans] ">
          A brief description of how it works <br /> Boost apart from others
        </h1>
        <p className="font-light text-sm md:font-medium md:text-lg">
          Unlock your full potential - all from the convenience of your
          fingertips!
        </p>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-10 md:flex-nowrap	">
        {featureData.map((data) => (
          <div key={data.title}>
            <div className="space-y-4  cursor-pointer p-5 hover:shadow-lg">
              <Image src={data.img} alt="" />
              <h3 className="font-bold text-xl font-['Plus Jakarta Sans']">
                {data.title}
              </h3>
              <p className="font-normal text-base">{data.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
