import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AboutSection from "./AboutSection";
import ConservationSection from "./AwarenessSection";
import Gallery from "./GalleryComp";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: "/images/bird1.JPG",
      alt: "Colorful birds in their natural habitat",
    },
    {
      url: "/images/swans.JPG",
      alt: "Birds flying over the sanctuary",
    },
    {
      url: "/images/bird3.jpg",
      alt: "Peaceful lake with birds",
    },
  ];
  // Auto carousel effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Image Carousel */}
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentImage === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative h-full container mx-auto px-2 md:px-8">
          <div className="h-full flex items-center">
            <div className="w-full lg:w-1/2 space-y-8">
              {/* Badge */}
              <div className="inline-block">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                  Discover Nature's Paradise
                </span>
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                  Welcome to BirdVillage Menar
                  <span className="block text-4xl lg:text-4xl mt-2 text-gray-300">
                    — Where Nature Meets Serenity!
                  </span>
                </h1>

                <p className="text-lg text-gray-300 max-w-md leading-relaxed">
                  Experience the magical harmony of hundreds of bird species in
                  their natural habitat. Every dawn brings a new symphony.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="group px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                  View Gallery
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 max-w-lg">
                <div>
                  <div className="text-3xl font-bold text-white">100+</div>
                  <div className="text-sm text-gray-300">Bird Species</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-300">Acres</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">365</div>
                  <div className="text-sm text-gray-300">Days Open</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
      <ConservationSection />
      <Gallery />
    </>
  );
};

export default HeroSection;
