import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const Story = () => {
  const sections = [
    {
      title: "History",
      items: [
        {
          subtitle: "2021",
          content: [
            "Rebrand the Company name to Maxius",
            "1st Pan-Governmental Information Resource Integration HW3",
          ],
        },
        {
          subtitle: "2020",
          content: [
            "2nd construction of AI-based adaptive security system",
            "SPC Certification : TOP 5 Rank record in the world of storage",
          ],
        },
        {
          subtitle: "2019",
          content: [
            "Development of Genome Analysis System",
            "Semiconductor and HPC Storage",
          ],
        },
        {
          subtitle: "2018",
          content: [
            "Development of small supercomputers using high performance system semiconductors",
            "Certified by International TPC",
          ],
        },
        {
          subtitle: "2017",
          content: [
            "Confirmation of excellent product for reducing standby power (Korea Energy Agency)",
            "Technology Innovation Award",
          ],
        },
        {
          subtitle: "2016",
          content: [
            "Obtain Certificate of Conformity registered for broadcasting and communication equipment (National Radio Research Institute)",
            "Sign MOU Agreement with KT ds",
          ],
        },
        {
          subtitle: "2015",
          content: [
            "Awarded IT Convergence Entrepreneur",
            "Awarded Korean Patent Technology Award (Sejong the Great Award)",
          ],
        },
        {
          subtitle: "2010",
          content: ["Company Founded"],
        },
      ],
    },
    {
      title: "Partners",
      items: [
        {
          subtitle: "1000 corporate Partners",
          content: [
            "Cheongwadae, KHNP, Ministry of National Defense",
            "Gunpo city, Korea Agro-Fisheries&Food Trade",
            "Coporation, JeollaNamdo, KMRB, JDC",
            "Korea Housing Finance Corporation",
            "Gyeonggi Provincial Police Agency",
            "NCIS, KPIC",
            "Supreme Court of Korea, IPET, LH",
            "National Gugak Center, Korea Workers Compensation&Welfare Service",
          ],
        },
      ],
    },
    {
      title: "Patents",
      items: [
        {
          subtitle: "High-speed data I/O semiconductor Chip",
          content: [
            "FPGA/CPLD/ASIC design and manufacturing technology, possess TPU development capability",
          ],
        },
        {
          subtitle: "Intelligent Pattern Analysis Algorithm",
          content: [
            "Hybrid Cache algorithm that follows data pattern analysis",
          ],
        },
        {
          subtitle: "OS and SSD optimization",
          content: [
            "Device Driver optimization technology differing for each OS, storage resource management technology",
          ],
        },
      ],
    },
    {
      title: "Awards",
      items: [
        {
          subtitle: "Awarded the Sejong Award at the KR Patent Awards",
          content: [
            "Received the highest domestic patent award for outstanding performance and energy-saving technology",
          ],
        },
        {
          subtitle: "Certified by Korea Excellent Product Designation",
          content: [
            "Certification of the only excellent procurement registered product in Korea in the server field that has been recognized for its high-performance system quality",
          ],
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-6xl font-bold text-center mb-20 intersect:motion-preset-slide-down-lg motion-delay-1000">
        STORY
      </h1>

      <div className="grid grid-cols-1 mx-auto md:max-w-5xl md:grid-cols-2 lg:grid-cols-4 gap-8 intersect:motion-preset-slide-right-lg motion-delay-1500">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col">
            <h2 className="text-3xl font-bold mb-8">{section.title}</h2>

            <ScrollArea className="h-72 w-full ">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`${
                    itemIndex !== sections.length - 1 ? "border-r-2" : ""
                  }`}
                >
                  <div className={`my-3`}>
                    {item.subtitle && (
                      <h3 className="text-sm font-semibold">{item.subtitle}</h3>
                    )}
                    <ul className="space-y-2">
                      {item.content.map((text, contentIndex) => (
                        <li
                          key={contentIndex}
                          className="text-gray-600 text-xs font-thin"
                        >
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
