import React from 'react';

// Custom SVG Icons as components
const BirdIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12c0-5-4-8-9-8s-9 3-9 8c0 3 2 5 4 6l-3 3h5l1-2c.5.2 1 .2 2 .2s1.5 0 2-.2l1 2h5l-3-3c2-1 4-3 4-6z" />
  </svg>
);

const TreeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3L4 15h4v6h8v-6h4L12 3z" />
  </svg>
);

const CameraIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="6" width="20" height="14" rx="2" />
    <circle cx="12" cy="13" r="4" />
    <path d="M9 3h6" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="3" />
  </svg>
);

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

const BirdVillageWebsite = () => {
  const birds = [
    { name: 'Blue Jay', description: 'Known for their intelligence and bold personality' },
    { name: 'Northern Cardinal', description: 'Distinctive red plumage and beautiful songs' },
    { name: 'American Goldfinch', description: 'Bright yellow birds that feed on seeds' },
    { name: 'Barn Owl', description: 'Silent nocturnal hunters with heart-shaped faces' },
    { name: 'Hummingbird', description: 'Tiny birds capable of hovering and flying backwards' },
    { name: 'Wood Duck', description: 'Colorful waterfowl that nest in tree cavities' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-96 flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1200/400"
            alt="Bird Village Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-white p-8">
          <h1 className="text-5xl font-bold mb-4">Welcome to Bird Village</h1>
          <p className="text-xl max-w-2xl mx-auto">
            A sanctuary where nature thrives and birds soar freely
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Discover Our Sanctuary</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-xl font-semibold mb-4 text-gray-800">
                <BirdIcon />
                Bird Watching
              </div>
              <p className="text-gray-600">
                Observe over 50 species of birds in their natural habitat
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-xl font-semibold mb-4 text-gray-800">
                <TreeIcon />
                Natural Trails
              </div>
              <p className="text-gray-600">
                Explore our scenic walking trails through pristine woodlands
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-xl font-semibold mb-4 text-gray-800">
                <CameraIcon />
                Photography
              </div>
              <p className="text-gray-600">
                Perfect spots for wildlife photography enthusiasts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bird Gallery */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Feathered Friends</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {birds.map((bird, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={`/api/placeholder/400/300`}
                  alt={bird.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{bird.name}</h3>
                  <p className="text-gray-600">{bird.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                <LocationIcon />
                Location
              </h2>
              <p className="text-lg mb-4 text-gray-600">
                Nestled in the heart of nature, our bird village provides a perfect
                escape from the urban jungle. Visit us to experience the harmony of
                wildlife in its purest form.
              </p>
              <div className="rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/api/placeholder/600/300"
                  alt="Location Map"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                <InfoIcon />
                Visitor Information
              </h2>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Opening Hours</h3>
                  <p className="text-gray-600">Daily from sunrise to sunset</p>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Best Time to Visit</h3>
                  <p className="text-gray-600">Early morning or late afternoon for optimal bird watching</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">What to Bring</h3>
                  <p className="text-gray-600">Binoculars, camera, comfortable walking shoes, and water</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg">
            © 2025 Bird Village Sanctuary. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BirdVillageWebsite;