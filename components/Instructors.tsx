import React from 'react';

interface Instructor {
  id: number;
  name: string;
  image: string;
  description: string;
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: 'Instructor 1',
    image: '/image/gv-1.png',
    description: 'Introduction text demo'
  },
  {
    id: 2,
    name: 'Instructor 2',
    image: '/image/gv-2.png',
    description: 'Introduction text demo'
  },
  {
    id: 3,
    name: 'Instructor 3',
    image: '/image/gv-3.png',
    description: 'Introduction text demo'
  }
];

const Instructors: React.FC = () => {
  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-logo-purple-2 text-sm uppercase tracking-widest">Team</span>
          <h2 className="text-4xl md:text-5xl font-sans text-gray-900 mt-2 font-bold">Instructors</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="group text-center">
              <div className="relative mb-6 overflow-hidden aspect-square max-w-xs mx-auto">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 border border-gray-200 m-4 pointer-events-none"></div>
              </div>
              <h3 className="text-2xl font-sans text-gray-900 mb-3 font-bold">{instructor.name}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{instructor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;

