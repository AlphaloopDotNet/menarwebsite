import React from "react";

const features = [
  {
    name: "Rich Biodiversity",
    description:
      "Experience a thriving ecosystem where hundreds of migratory and native bird species create a vibrant tapestry of life, making Menar a true paradise for birdwatchers, photographers, and nature enthusiasts.",
    iconPath:
      "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z",
  },
  {
    name: "Cultural Heritage",
    description:
      "Immerse yourself in Menar's rich cultural tapestry, where centuries-old traditions blend seamlessly with modern conservation efforts. Experience our vibrant festivals, traditional architecture, and authentic village life.",
    iconPath:
      "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12v-.008z",
  },
  {
    name: "Ecotourism Hub",
    description:
      "Discover responsible tourism at its finest. Our sustainable practices and community-led initiatives ensure that every visit contributes to conservation while offering authentic, enriching experiences for our guests.",
    iconPath:
      "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
  },
  {
    name: "Sacred Bird Sanctuary",
    description:
      "Step into a sanctuary where generations of local stewardship have created a safe haven for birds. Our community's deep-rooted commitment to conservation serves as an inspiring model for wildlife protection worldwide.",
    iconPath:
      "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
  {
    name: "Menar Wetland Complex",
    description:
      "A globally significant ecosystem, recognized as an Important Bird and Biodiversity Area (IBA) and protected by state legislation. We're proudly working towards international Ramsar site status, further cementing our commitment to wetland conservation.",
    iconPath:
      "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z",
  },
];

const AboutSection = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2 lg:items-start">
          {/* Content Column */}
          <div className="lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-orange-600">
                Discover Menar
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                About BirdVillage Menar
              </p>
              {/* Hindi Description */}
              <div className="mt-6 rounded-lg bg-orange-50 p-6 shadow-md">
                <p className="text-md leading-8 text-gray-900">
                  बर्ड विलेज मेनार/पक्षी विहार मेनार/मेनार वेटलैंड कॉम्प्लेक्स -
                  प्रवासी और स्थानीय परिंदों की पसंदीदा शरणस्थली, मेनार उदयपुर
                  से 45 किमी दूर स्थित है। 2016 में IBA के रूप में नामित और 2023
                  में राज्य सरकार द्वारा वेटलैंड संरक्षित क्षेत्र घोषित किया
                  गया, यह स्थान रामसर साइट मान्यता के प्रयास में है।
                </p>
              </div>
            </div>
          </div>
          {/* Image Column */}
          <div className="lg:mt-0 lg:pl-8">
            <div className="relative">
              <img
                alt="Scenic view of BirdVillage Menar"
                src="/images/menar.jpg"
                className="aspect-[16/9] w-full rounded-2xl object-cover shadow-xl ring-1 ring-gray-400/10"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-400/10" />
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div className="mx-auto mt-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col items-start p-6 bg-white rounded-lg shadow-md ring-1 ring-gray-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <svg
                    className="h-8 w-8 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={feature.iconPath}
                    />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.name}
                  </h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
