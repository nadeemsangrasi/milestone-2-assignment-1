import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import aboutImg from "@/assets/images/about.jpg";
const AboutSection = () => {
  return (
    <Wrapper>
      <div
        id="about"
        className="space-y-4 md:space-y-0  md:flex justify-between gap-8 py-16"
      >
        <div className="w-full md:w-1/2 mx-auto md:mx-0">
          <Image src={aboutImg} alt="martImage" className="w-full rounded-md" />
        </div>
        <div className="w-full md:w-1/2 space-y-3 pt-16 mx-auto md:mx-0 text-center md:text-left ">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About Us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            deleniti esse sequi sint id accusantium voluptatem cum at unde
            fugiat a veritatis ducimus eaque, maiores perferendis eos fuga
            quibusdam omnis tempora saepe labore doloribus, blanditiis ea.
            Deserunt et hic magnam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti perferendis a quo eum quaerat, nesciunt
            cupiditate molestiae architecto dolores aliquam deserunt sapiente
            magni. Praesentium, possimus iusto molestiae maxime animi minus.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutSection;
