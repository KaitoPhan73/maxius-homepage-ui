"use client";
const servicesData = [
  {
    title: "Product",
    description: (
      <>
        <span className="text-[#f93]">High-Performance Server </span> with an
        extensive selection of serviceable capabilities Building{" "}
        <span className="text-[#f93]">IDC</span> ; incorporating the latest{" "}
        <span className="text-[#f93]">Storage </span> technology applicable to
        various I/O devices. Various{" "}
        <span className="text-[#f93]">Blockchain Solutions </span> , including
        IPFS.
        <br />
        <br />
        Maxius will continue to develop as a company in the global market by
        supplying a variety of products and solutions.
      </>
    ),
    bgColor: "bg-gray-800",
    textColor: "text-white",
  },
  {
    title: "Technology",
    description: (
      <>
        Based on more than 20 years of research know-how{" "}
        <span className="text-[#f93]"> and technology</span>, we are the only
        company in Korea that makes HPC servers{" "}
        <span className="text-[#f93]"> using self-developed system </span>
        semiconductors and{" "}
        <span className="text-[#f93]">
          provides solutions specialized{" "}
        </span>in{" "}
        <span className="text-[#f93]">the intelligent data center </span>in the
        IT industry.
        <br />
        <br />
        With our services, Maxius strives to supply differentiated products and
        solutions.
      </>
    ),
    bgColor: "bg-gray-800",
    textColor: "text-white",
  },
  {
    title: "Application",
    description: (
      <>
        Maxius of miscellaneous products are used for{" "}
        <span className="text-[#f93]">
          {" "}
          AI/genetic analysis, edge computing, IDC centers,{" "}
        </span>{" "}
        as well as various solutions used for vast{" "}
        <span className="text-[#f93]">
          {" "}
          data analysis, distributed processing functions and IPFS IDC{" "}
        </span>{" "}
        , etc.
        <br />
        <br />
        Maxius will supply serviceable products and solutions to varying fields
        through R&D and communication.
      </>
    ),
    bgColor: "bg-gray-800",
    textColor: "text-white",
  },
  {
    title: "Blockchain",
    description: (
      <>
        <span className="text-[#f93]">storage and service </span> utilized in
        Metaverse{" "}
        <span className="text-[#f93]">
          {" "}
          IPFS Storage and Application Services{" "}
        </span>{" "}
        in Web3.0
        <br />
        <br />
        Maxius provides both H/W and S/W, which are optimized for decentralized
        storage to match customer needs and create the best added value.
      </>
    ),
    bgColor: "bg-gray-800",
    textColor: "text-[#f93]",
  },
];

const Services = () => {
  return (
    <section
      id="story"
      className="h-screen flex items-center justify-center text-white px-24"
      style={{
        backgroundImage: 'url("/images/page-3.png")',
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full motion-preset-pop motion-delay-300">
        {/* Grid container */}
        <div
          className="grid w-full h-full"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)", // 4 cột bằng nhau
          }}
        >
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`group transition-all duration-300 bg-opacity-0 bg-white hover:bg-opacity-5 ${
                index !== servicesData.length - 1 ? "border-r-[1px]" : ""
              }`}
              style={{
                transition: "grid-template-columns 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const gridContainer = e.currentTarget.parentNode as HTMLElement;
                if (gridContainer) {
                  gridContainer.style.gridTemplateColumns = Array(4)
                    .fill("1fr")
                    .map((col, i) => (i === index ? "2fr" : "1fr"))
                    .join(" ");
                }
              }}
              onMouseLeave={(e) => {
                const gridContainer = e.currentTarget.parentNode as HTMLElement;
                gridContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
              }}
            >
              <div
                className={` relative overflow-hidden flex px-12  flex-col mt-[30vh] `}
              >
                {/* Content */}
                <h3
                  className={`text-2xl font-semibold ${
                    service.textColor
                  }  motion-delay-${index * 500 + 500} ${
                    index % 2 === 1
                      ? "intersect:motion-preset-slide-up-lg"
                      : "intersect:motion-preset-slide-down-lg"
                  }`}
                >
                  {service.title}
                </h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-4">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
