import Image from "next/image";
import slide_right from "../../public/slide_right.png";
import slide_left from "../../public/slide_left.png";
import learnboost_testimonial_new from "../../public/learnboost_testimonial_new.png";

const Testimonial = () => {
  return (
    <section className=" p-10">
      <div className="text-center space-y-3">
        <h1 className="font-medium text-4xl md:font-semibold md:text-6xl lg:font-bold font[Plus Jakarta Sans] ">
          Hear from Our Happy <br />
          Learners
        </h1>
        <p className="font-light text-sm md:font-medium md:text-lg">
          Join our growing community of happy learners and unlock the full
          potential of your child&apos;s <br /> education with LearnBoost.{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-20 mt-20">
        <Image src={learnboost_testimonial_new} alt="" />
        <div className="bg-[#FFDDE1] space-y-20 p-12 h-full rounded-lg">
          <p>
            As a teacher, I&apos;ve noticed a remarkable improvement in my
            students&apos; enthusiasm for learning. The engaging lessons and
            interactive games have sparked a genuine interest in learning.
            LearnBoost&apos;s personalized learning paths have helped each child
            unlock their potential and excel in their studies.
          </p>
          <div className="flex items-center justify-between">
            <p className="font-bold text-xl">
              Mrs. Johnson, <br />
              Primary School Teacher
            </p>
            <div className="flex items-center justify-center gap-5">
              <Image src={slide_left} alt="" />
              <Image src={slide_right} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
