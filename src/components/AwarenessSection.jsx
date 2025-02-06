import React from 'react';

const ConservationSection = () => {
  const initiatives = [
    {
      title: "Local Conservation Heroes",
      description: "Our community members actively participate in habitat protection, conducting regular clean-up drives, monitoring bird populations, and maintaining wetland health."
    },
    {
      title: "Education Programs",
      description: "Regular workshops and nature walks educate visitors and locals about bird species, their habitats, and the importance of conservation."
    },
    {
      title: "Sustainable Tourism",
      description: "We promote responsible tourism practices that minimize environmental impact while maximizing visitor experience and community benefits."
    }
  ];

  return (
    <div className="bg-orange-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-600">Conservation & Awareness</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Together, we conserve the rich biodiversity of Menar
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {initiatives.map((initiative) => (
              <div 
                key={initiative.title} 
                className="bg-white/60 rounded-lg border border-green-100 p-6 shadow-sm"
              >
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {initiative.title}
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  {initiative.description}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 text-center">
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              At Menar, eco-tourism isn't just a concept - it's our way of life. We believe in creating meaningful experiences that connect visitors with nature while ensuring the preservation of our precious ecosystem. Through carefully planned tourism activities, we generate resources for conservation efforts and create sustainable livelihoods for our community members. Our approach demonstrates that tourism and conservation can work hand in hand to create a better future for both wildlife and people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConservationSection;