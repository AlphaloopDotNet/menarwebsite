import React from "react";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();

  const handleNavigateToGallery = () => {
    navigate("/gallery");
  };
  const galleryImages = [
    {
      column: 1,
      images: [
        { src: "/images/bird.jpg", alt: "Migratory birds at Menar Lake" },
        { src: "/images/bird1.JPG", alt: "Scenic view of Menar Lake" },
        { src: "/images/bird2.jpg", alt: "Wildlife at Menar" },
      ],
    },
    {
      column: 2,
      images: [
        { src: "/images/BirdGroup2.jpg", alt: "Local birds of Menar" },
        { src: "/images/birdsGroup.JPG", alt: "Sunset at Menar Lake" },
        { src: "/images/FlyingCap.jpg", alt: "Local culture of Menar" },
      ],
    },
    {
      column: 3,
      images: [
        { src: "/images/HelloBird.jpg", alt: "Conservation efforts at Menar" },
        { src: "/images/bird3.jpg", alt: "Rare bird species" },
        { src: "/images/menar.jpg", alt: "Morning at Menar Lake" },
      ],
    },
    {
      column: 4,
      images: [
        { src: "/images/NoPlasticMenar.jpg", alt: "Village life at Menar" },
        { src: "/images/whiteBird.JPG", alt: "Community conservation" },
        { src: "/images/BlackBird.JPG", alt: "Local wildlife" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 justify-center ">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Capturing Menar's Natural Beauty
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the vibrant ecosystem and rich biodiversity of Menar
            through our carefully curated collection of photographs.
          </p>

          {/* Navigate Button */}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((column, columnIndex) => (
            <div key={`column-${columnIndex}`} className="grid gap-6">
              {column.images.map((image, imageIndex) => (
                <div
                  key={`image-${columnIndex}-${imageIndex}`}
                  className="relative overflow-hidden group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex mt-12 justify-center">
          <button
            className="px-6 py-3 bg-orange-500 text-gray-100 text-lg font-medium rounded-2xl shadow-md hover:bg-orange-700 hover:shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
            onClick={handleNavigateToGallery}
          >
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
