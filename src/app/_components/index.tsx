// pages/HomePageIndex.tsx
"use client";
import React, { useRef, useState, useEffect } from "react";
import HeroSection from "./hero-section";
import Introduction from "./introduction";
import Services from "./services";
import Story from "./story";
import About from "./about";
import SquareNavigation from "./square-navigation";

const HomePageIndex = () => {
  const [activeSection, setActiveSection] =
    useState<keyof typeof sectionRefs>("hero");
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    hero: heroRef,
    introduction: introRef,
    service: serviceRef,
    story: storyRef,
    about: aboutRef,
  };

  // Navigation items configuration
  const navItems = [
    { id: "hero", label: "Hero" },
    { id: "introduction", label: "Introduction" },
    { id: "service", label: "Service" },
    { id: "story", label: "Story" },
    { id: "about", label: "About" },
  ];

  // Click handler - no delay
  const handleNavigate = (id: keyof typeof sectionRefs) => {
    setActiveSection(id);
    const ref = sectionRefs[id];
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll handler - with 1s delay
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();

    if (isScrolling) return;

    const direction = e.deltaY > 0 ? 1 : -1;
    const sections = Object.keys(sectionRefs) as Array<
      keyof typeof sectionRefs
    >;
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = currentIndex + direction;

    if (nextIndex >= 0 && nextIndex < sections.length) {
      const nextSection = sections[nextIndex];
      setIsScrolling(true);
      setActiveSection(nextSection);
      sectionRefs[nextSection].current?.scrollIntoView({
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [isScrolling, activeSection]);

  return (
    <div className="relative">
      {/* Navigation Component */}
      <SquareNavigation
        items={navItems}
        activeSection={activeSection}
        onNavigate={() => {
          handleNavigate;
        }}
      />

      {/* Section Container */}
      <div
        ref={containerRef}
        className="snap-y snap-mandatory h-screen overflow-y-scroll"
      >
        <div ref={heroRef} className="h-screen snap-start bg-white">
          <HeroSection />
        </div>

        <div ref={introRef} className="h-screen snap-start bg-gray-50">
          <Introduction />
        </div>

        <div ref={serviceRef} className="h-screen snap-start bg-white">
          <Services />
        </div>

        <div ref={storyRef} className="h-screen snap-start bg-gray-50">
          <Story />
        </div>

        <div ref={aboutRef} className="h-screen snap-start bg-white">
          <About />
        </div>
      </div>
    </div>
  );
};

export default HomePageIndex;
