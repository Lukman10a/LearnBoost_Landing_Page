import Image from "next/image";
import heroimagenew from "../../public/heroimagenew.png";
import herophone from "../../public/herophone.png";
import googleplay from "../../public/googleplay.png";
import appstore from "../../public/appstore.png";

const HeroSection = () => {
  return (
    <section className="grid text-center md:text-left md:grid-cols-2 md:grid-rows-1	p-10 py-20">
      <div className="space-y-14 mb-8">
        <h1 className="font-medium text-4xl md:font-semibold md:text-6xl lg:font-bold font[Plus Jakarta Sans] ">
          Introducing LearnBoost: The Ultimate Learning Mobile App
        </h1>
        <p className="font-light text-sm md:font-medium md:text-lg">
          Are you ready to take your learning journey to new heights? Welcome to
          LearnBoost, the ultimate mbile app that empowers you to expand your
          knowledge,
        </p>
        <div className="flex gap-5 items-center justify-center cursor-pointer lg:justify-start">
          <Image src={googleplay} alt="" />
          <Image src={appstore} alt="" />
        </div>
      </div>
      <div className="relative ">
        <Image src={heroimagenew} alt="" />
        <Image
          src={herophone}
          alt=""
          className="absolute w-40 top-0 left-24 md:w-[258px] md:top-4 md:left-10 lg:top-0 lg:left-36"
        />
      </div>
    </section>
  );
};

export default HeroSection;
