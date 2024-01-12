import React from 'react';

function Membership() {
  const membershipPlans = [
    {
      title: 'Silver',
      price: '50.000 HUF / month',
      description: 'Etiam ac convallis enim, eget euismod dolor.',
      features: ['Use of all Services', 'Participation in Events', 'Discounts'],
      cardColor: 'bg-silver text-black',
      buttonColor: 'btn-primary',
    },
    {
      title: 'Gold',
      price: '80.000 HUF / month',
      description: 'Morbi cursus ut sapien sit amet consectetur ultrices.',
      features: [
        'Everything in Silver',
        'Advance appointment booking',
        'Discounts for family members',
      ],
      cardColor: 'bg-gold text-black',
      buttonColor: 'btn-primary',
    },
    {
      title: 'Platinum',
      price: '120.000 HUF / month',
      description: 'Phasellus ultrices bibendum nibh in vehicula.',
      features: [
        'Everything in Silver and Gold',
        'Free chauffeur service',
        'Biggest Péló inda House',
      ],
      cardColor: 'bg-platinum text-black',
      buttonColor: 'btn-primary',
    },
  ];

  return (
    <section className="pt-20 pb-10 text-dark min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold lg:text-5xl mb-5 mb-lg-8">Choose your best plan</h2>
          </div>
          <div className="row justify-content-center">
            {membershipPlans.map((plan) => (
              <div key={plan.title} className="col-md-4 mb-4">
                <div
                  className={`d-flex flex-column p-6 space-y-6 rounded shadow ${plan.cardColor} h-100`}
                  style={{ minHeight: '500px' }}
                >
                  <div className="space-y-2">
                    <h4 className="text-3xl font-bold">{plan.title}</h4>
                    <span className="text-7xl font-bold">{plan.price}</span>
                  </div>
                  <p className="mt-3 leading">{plan.description}</p>
                  <ul className="flex-1 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex mb-2 space-x-2">
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <button
                      type="button"
                      className={`inline-block px-2 py-4 font-semibold tracking-widest text-center rounded ${plan.buttonColor}`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="mt-auto text-center py-4 bg-gray-800 text-violet-400" />
    </section>
  );
}

export default Membership;
