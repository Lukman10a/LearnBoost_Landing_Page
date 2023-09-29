"use client";

import Image from "next/image";
import progressimgnew from "../../public/progressimgnew.png";
import successicon from "../../public/successicon.png";
import progressphonebuttom from "../../public/progressphonebuttom.png";
import progressphonetop from "../../public/progressphonetop.png";
import { useState } from "react";

const SUCCESS_DATA = [
  {
    img: successicon,
    title: "Supportive Community",
    subtitle: "Supportive community where children can connect",
  },
  {
    img: successicon,
    title: "Involvement and Insights",
    subtitle: "We believe in the power of parental involvement.",
  },
  {
    img: successicon,
    title: "Child's Education",
    subtitle: "We are your partner in your child's education.",
  },
  {
    img: successicon,
    title: "Learning Adventure",
    subtitle: "Get ready to embark on an exciting learning adventure",
  },
];

const Progress = () => {
  const [successData, setSuccessData] = useState(SUCCESS_DATA);

  return (
    <div className="flex flex-col gap-5 md:grid grid-cols-1 md:gap-5 lg:grid-cols-2 grid-rows-1 p-20 ">
      <div className="space-y-5">
        <div className="space-y-10">
          <h1 className="font-medium text-4xl md:font-semibold md:text-6xl lg:font-bold font[Plus Jakarta Sans] ">
            Track Progress and Celebrate Achievements
          </h1>
          <p className="font-light text-sm md:font-medium md:text-lg">
            As a parent, you will be delighted to track your child&apos;s
            progress through our easy-to-use dashboard. Watch as your little one
            achieves milestones and earns badges, celebrating every step of the
            way.
          </p>
        </div>

        <div className="grid grid-cols-2 grid-row-2 gap-4">
          {successData.map((data) => (
            <div className="space-y-3" key={data.title}>
              <Image src={data.img} alt="" />
              <h3 className="font-bold">{data.title}</h3>
              <p>{data.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <Image src={progressimgnew} alt="" />

        <Image
          src={progressphonebuttom}
          alt=""
          className="w-52 md:w-[450px] absolute top-0 md:top-4 "
        />
        <Image
          src={progressphonetop}
          alt=""
          className="w-40 md:w-[350px] absolute top-0 md:top-0 left-24 md:left-52 "
        />
      </div>
    </div>
  );
};

export default Progress;
