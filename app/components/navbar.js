import Image from "next/image";
import learnboostnew from "../../public/learnboostnew.png";

const NavBar = () => {
  return (
    <nav className="bg-[#F8F9FF] flex justify-between items-center p-5 px-8">
      <Image src={learnboostnew} alt="" />
      <div className="list-none cursor-pointer hidden md:flex items-center justify-between md:gap-10 lg:gap-20">
        <li className="hover:underline hover:font-bold">Home</li>
        <li className="hover:underline hover:font-bold">Features</li>
        <li className="hover:underline hover:font-bold">Pricing</li>
        <li className="hover:underline hover:font-bold">Testimonial</li>
        <button className="bg-[#DA251C] text-white p-2 px-4 rounded-md">
          ContactUs
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
