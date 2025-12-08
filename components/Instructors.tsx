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
    name: 'Giáo viên 1',
    image: '/imange/gv-1.png',
    description: 'Đoạn giới thiệu để text demo'
  },
  {
    id: 2,
    name: 'Giáo viên 2',
    image: '/imange/gv-2.png',
    description: 'Đoạn giới thiệu để text demo'
  },
  {
    id: 3,
    name: 'Giáo viên 3',
    image: '/imange/gv-3.png',
    description: 'Đoạn giới thiệu để text demo'
  }
];

const Instructors: React.FC = () => {
  return (
    <section className="py-24 bg-zouk-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-logo-purple-2 text-sm uppercase tracking-widest">Đội ngũ</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-2">Giáo Viên</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="group text-center">
              <div className="relative mb-6 overflow-hidden aspect-square max-w-xs mx-auto">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
              </div>
              <h3 className="text-2xl font-serif text-white mb-3">{instructor.name}</h3>
              <p className="text-stone-400 font-light leading-relaxed">{instructor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;

