import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
const sectionsData = [
  {
    title: "Company.",
    description: (
      <div className="flex items-center gap-2">
        support@maxius.io <AiOutlineMail className="inline-block" />
      </div>
    ),
  },
  {
    title: "Warranty.",
    description: <Link href="#learn-more">Learn more &gt;</Link>,
  },
  {
    title: "Technical support.",
    description: (
      <div className="flex items-center gap-2">
        support@maxius.io <AiOutlineMail className="inline-block" />
      </div>
    ),
  },
];

const About = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background with diagonal overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/page-5.png')`,
          backgroundColor: "#000",
        }}
      >
        <div className="group relative max-w-5xl mx-auto flex flex-col gap-12 items-start justify-center h-full">
          {sectionsData.map((section, index) => (
            <section key={index} className="space-y-2">
              <h2 className="text-3xl font-bold intersect:motion-preset-slide-up-lg motion-delay-500">
                {section.title}
              </h2>
              <div className="hover:bg-white flex flex-col  p-2 w-52 hover:text-black text-sm font-thin text-gray-300 pl-2 intersect:motion-preset-slide-right-lg motion-delay-1000">
                {section.description}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
