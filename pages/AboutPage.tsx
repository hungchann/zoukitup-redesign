import React from 'react';
import { Award, Users, Calendar, Globe, Music, Trophy, ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const artists = [
    'Dominik and Monika',
    'Alisson Sandi',
    'Brenda and Gui',
    'Nhat and Gigi',
    'Rafael and Juliana',
    'Gilson and Mailys',
    'Ariel and Leticia',
    'Saulo Dias',
    'Luan and Adriana',
    'Lautaro and Ariana'
  ];

  const nationalEvents = [
    'Vietnam Latin Xperience',
    'Vietnam International Latin Festival'
  ];

  const internationalEvents = [
    'ZoukSensation',
    '1st China Zouk Congress (Shanghai)'
  ];

  const congresses = [
    'BDF - Brazilian Dance Festival (Amsterdam)',
    'Brazuky Australia',
    'Helsinki Zouk Festival',
    'Zouk Sensation',
    'ZoukSEA'
  ];

  const handleBackToHome = () => {
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-logo-purple-2 selection:text-white">
      <Navigation />
      
      <section className="py-24 bg-white text-gray-900 relative overflow-hidden pt-32">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <button
            onClick={handleBackToHome}
            className="mb-8 flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-widest">Back to Home</span>
          </button>

          {/* Main Header */}
          <div className="text-center mb-20 fade-in-up">
            <h1 className="text-5xl md:text-6xl font-sans mb-6 leading-tight font-bold">
              PTZouk Vietnam - <span className="text-logo-purple-2 italic">Zoukitup</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-logo-purple-2 to-transparent mx-auto"></div>
          </div>

          {/* Introduction Section */}
          <div className="max-w-4xl mx-auto mb-20 fade-in-up delay-100">
            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
              <p className="text-xl text-gray-900 font-normal">
                Founded in 2019, PTZ - Phuong & Trang Zouk Vietnam - is the leading Brazilian Zouk studio in Hanoi, committed to leading the way in spreading this dance in the local community.
              </p>
              <p>
                We provide a comprehensive schedule including weekly classes, social dancing, and regular Brazilian Zouk events. Our curriculum is continuously updated to integrate the latest global developments in Zouk, and our parties feature non-stop mixes, live from our local DJs.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-4xl mx-auto fade-in-up delay-200">
            <div className="text-center border border-gray-200 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors bg-zouk-light">
              <Calendar className="w-8 h-8 mx-auto mb-4 text-logo-purple-2" />
              <span className="block text-3xl font-sans text-gray-900 mb-2 font-bold">2019</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Founded</span>
            </div>
            <div className="text-center border border-zouk-gold/30 p-6 rounded-lg hover:border-zouk-gold transition-colors bg-zouk-gold/10">
              <Trophy className="w-8 h-8 mx-auto mb-4 text-zouk-gold" />
              <span className="block text-3xl font-sans text-zouk-gold mb-2 font-bold">2018</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">First Award</span>
            </div>
            <div className="text-center border border-gray-200 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors bg-zouk-light">
              <Music className="w-8 h-8 mx-auto mb-4 text-logo-purple-2" />
              <span className="block text-3xl font-sans text-gray-900 mb-2 font-bold">2022</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Zouk It Up</span>
            </div>
            <div className="text-center border border-gray-200 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors bg-zouk-light">
              <Globe className="w-8 h-8 mx-auto mb-4 text-logo-purple-2" />
              <span className="block text-3xl font-sans text-gray-900 mb-2 font-bold">10+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">International Artists</span>
            </div>
          </div>

          {/* Iconic Events Section */}
          <div className="mb-20 fade-in-up delay-300">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-sans mb-6 text-logo-purple-2 font-bold">
                Iconic Events and International Influence
              </h2>
              <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                <p>
                  Since 2022, PTZ has been the host of the iconic <span className="text-gray-900 font-normal">Zouk It Up</span> event. We are committed to organizing the city's best events by inviting internationally recognized artists to promote Brazilian Zouk and Lambada in Hanoi.
                </p>
                <p className="text-gray-900 font-normal mt-6 mb-3">Our honored guests have included:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-6 border-l-2 border-logo-purple-2/30">
                  {artists.map((artist) => (
                    <div key={artist} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3"></span>
                      {artist}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Founders Section */}
          <div className="mb-20 fade-in-up delay-300">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-sans mb-8 text-logo-purple-2 font-bold">
                Meet the Founders: Hoài Phương & Huyền Trang
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-gray-200 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors bg-zouk-light">
                  <h3 className="text-xl font-sans mb-4 text-gray-900 font-bold">
                    Trang <span className="text-logo-purple-2 text-sm font-normal">(Friday Night)</span>
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Dynamic, vibrant, and full of life, always with a beautiful smile and graceful posture on the dance floor.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors bg-zouk-light">
                  <h3 className="text-xl font-sans mb-4 text-gray-900 font-bold">
                    Phương <span className="text-logo-purple-2 text-sm font-normal">(Sunday Morning with Hot Black Coffee)</span>
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Starts slow, takes time to filter, but then explodes with powerful energy both as a DJ and dancer.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-gray-500 font-light italic">
                Hoài Phương and Huyền Trang began their dance partnership in late 2017. Their more than five-year partnership is characterized by contrasting yet harmonious styles.
              </p>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-20 fade-in-up delay-300">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-sans mb-8 text-logo-purple-2 font-bold">
                Achievements and Contributions
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-zouk-gold pl-6 bg-gradient-to-r from-zouk-gold/10 to-transparent p-4 rounded-r-lg">
                  <h3 className="text-xl font-sans mb-4 text-gray-900 flex items-center font-bold">
                    <Award className="w-6 h-6 mr-3 text-zouk-gold" />
                    <span className="text-zouk-gold">First International Award</span>
                  </h3>
                  <p className="text-gray-600 font-light">
                    Phương and Trang won their first international award in 2018, achieving 2nd place in the ProAm competition at ZoukSEA.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border border-gray-200 p-6 rounded-lg bg-zouk-light">
                    <h3 className="text-xl font-sans mb-4 text-gray-900 flex items-center font-bold">
                      <Globe className="w-6 h-6 mr-3 text-logo-purple-2" />
                      National
                    </h3>
                    <ul className="space-y-2 text-gray-600 font-light">
                      {nationalEvents.map((event) => (
                        <li key={event} className="flex items-start">
                          <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2"></span>
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border border-gray-200 p-6 rounded-lg bg-zouk-light">
                    <h3 className="text-xl font-sans mb-4 text-gray-900 flex items-center font-bold">
                      <Globe className="w-6 h-6 mr-3 text-logo-purple-2" />
                      International
                    </h3>
                    <ul className="space-y-2 text-gray-600 font-light">
                      {internationalEvents.map((event) => (
                        <li key={event} className="flex items-start">
                          <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2"></span>
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border border-gray-200 p-6 rounded-lg bg-zouk-light">
                  <h3 className="text-xl font-sans mb-4 text-gray-900 flex items-center font-bold">
                    <Users className="w-6 h-6 mr-3 text-logo-purple-2" />
                    International Congresses Attended
                  </h3>
                  <p className="text-gray-600 font-light mb-4">
                    Beyond performing, Phương and Trang actively promote Vietnamese Zouk and invite renowned artists to teach in Vietnam. They have attended major international Zouk congresses around the world, including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-6">
                    {congresses.map((congress) => (
                      <div key={congress} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3"></span>
                        {congress}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="max-w-4xl mx-auto fade-in-up delay-300">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <img 
                src="https://picsum.photos/seed/zoukcouple/1200/675" 
                alt="PTZouk Vietnam" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 border border-gray-200 m-4 pointer-events-none rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
