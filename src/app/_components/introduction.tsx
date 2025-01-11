const Introduction = () => {
  return (
    <section
      id="introduction"
      className="h-screen flex items-center justify-center text-white "
      style={{
        backgroundImage: 'url("/images/page-2.png")',
        backgroundSize: "cover",
      }}
    >
      <div className="text-start max-w-6xl p-4 intersect:motion-preset-slide-right  motion-delay-500">
        <p className="text-2xl md:text-5xl font-bold">
          1. <span className="text-[#f93]">Self-produced </span>
          semiconductors 2. Production and Sales of{" "}
          <span className="text-[#f93]">H</span>
          igh-Performance <span className="text-[#f93]">S</span>ervers with
          self-manufactured semiconductors 3. Construction of operative
          <span className="text-[#f93]"> Block chain IDC </span> based on
          high-performance servers 4. Establish solution relating to Blockchain{" "}
          <span className="text-[#f93]"> (IPFS) </span>
        </p>
      </div>
    </section>
  );
};

export default Introduction;
