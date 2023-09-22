import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-orange-500">Meal Plan</h1>
          <p>
          A meal plan is a structured daily eating schedule designed for health, fitness, or dietary goals.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare className="cursor-pointer" size={30} />
            <FaInstagram className="cursor-pointer" size={30} />
            <FaTwitterSquare className="cursor-pointer" size={30} />
            <FaGithubSquare className="cursor-pointer" size={30} />
            <FaDribbbleSquare className="cursor-pointer" size={30} />
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Kanpur</li>
              <li className="py-2 text-sm">Lucknow</li>
              <li className="py-2 text-sm">Mirzapur</li>
              <li className="py-2 text-sm">Banda</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Varanasi</li>
              <li className="py-2 text-sm">Gorakhpur</li>
              <li className="py-2 text-sm">Prayagraj</li>
              <li className="py-2 text-sm">Ayodhya</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Ghaziabad</li>
              <li className="py-2 text-sm">Ghazipur</li>
              <li className="py-2 text-sm">Gonda</li>
              <li className="py-2 text-sm">Jaunpur</li>
            </ul>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
