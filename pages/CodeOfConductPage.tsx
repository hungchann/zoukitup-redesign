import React from 'react';
import { ArrowLeft, Users, Shield, Heart, MessageCircle, AlertTriangle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CodeOfConductPage: React.FC = () => {
  const handleBackToHome = () => {
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-logo-purple-2 selection:text-white">
      <Navigation />
      
      <section className="py-24 bg-white text-gray-900 relative overflow-hidden pt-32">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <button
            onClick={handleBackToHome}
            className="mb-8 flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-widest">Back to Home</span>
          </button>

          {/* Main Header */}
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-5xl md:text-6xl font-sans mb-6 leading-tight font-bold">
              PTZ <span className="text-logo-purple-2">Code of Conduct</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-logo-purple-2 to-transparent mx-auto mb-6"></div>
            <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">
              Essential guidelines for fostering a respectful, safe, and inclusive dance environment.
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12 fade-in-up delay-100">
            <div className="bg-zouk-light border-l-4 border-logo-purple-2 p-6 rounded-r-lg">
              <p className="text-gray-700 font-light leading-relaxed">
                The PTZ Code of Conduct outlines essential guidelines for fostering a respectful, safe, and inclusive dance environment. 
                We ask all members of our community to read, understand, and follow these guidelines.
              </p>
            </div>
          </div>

          {/* Section 1: Diversity and Inclusion */}
          <div className="mb-12 fade-in-up delay-200">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-logo-purple-2/10 flex items-center justify-center mr-4 flex-shrink-0">
                <Users className="w-6 h-6 text-logo-purple-2" />
              </div>
              <div>
                <h2 className="text-3xl font-sans text-gray-900 mb-4 font-bold">1. Diversity and Inclusion</h2>
                <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                  <p>
                    PTZ supports the principle that dance roles (lead and follow) should not be tied to gender. 
                    Our teachers and assistants use gender-neutral language when referring to roles in class, and we encourage our students to do the same.
                  </p>
                  <p>
                    We urge all dancers to avoid making assumptions about dance roles and to communicate with their partners regarding their preferred roles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Safety - Technique */}
          <div className="mb-12 fade-in-up delay-200">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-logo-purple-2/10 flex items-center justify-center mr-4 flex-shrink-0">
                <Shield className="w-6 h-6 text-logo-purple-2" />
              </div>
              <div>
                <h2 className="text-3xl font-sans text-gray-900 mb-4 font-bold">2. Safety on the Dancefloor: Technique</h2>
                <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                  <p>
                    Certain movements can be dangerous if executed incorrectly. We request that all students refrain from performing advanced movements on the dancefloor until they have received proper training from PTZ or have been evaluated by an instructor.
                  </p>
                  <p className="font-medium text-gray-900">Advanced movements include, but are not limited to:</p>
                  <div className="bg-zouk-light p-6 rounded-lg border border-gray-200">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3"></span>
                        Cambre
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3"></span>
                        Chicote
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3"></span>
                        Balao
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3"></span>
                        Boneca
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3"></span>
                        Tilted turn
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3"></span>
                        Rotisserie
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3"></span>
                        Toahla
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3"></span>
                        Other head movements
                      </li>
                    </ul>
                  </div>
                  <p className="mt-4">
                    PTZ teachers and staff reserve the right to ask any student not to lead or follow a particular movement if we observe unsafe execution or if the dancer is not adequately trained.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Safety - Personal Boundaries */}
          <div className="mb-12 fade-in-up delay-200">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-logo-purple-2/10 flex items-center justify-center mr-4 flex-shrink-0">
                <Heart className="w-6 h-6 text-logo-purple-2" />
              </div>
              <div>
                <h2 className="text-3xl font-sans text-gray-900 mb-4 font-bold">3. Safety on the Dancefloor: Personal Boundaries</h2>
                <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>It is acceptable to say <strong className="text-gray-900">No</strong>; conversely, do not take it personally if you are rejected when asking someone to dance.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>You can decline any dance or end early.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>PTZ does not tolerate any form of harassment. Harassment includes inappropriate verbal comments or abuse, deliberate intimidation, bullying, unwanted photography or recording, inappropriate physical contact, or unwelcome sexual attention.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>If you are being harassed or witness someone being harassed, please inform PTZ teachers and staff. We respect the anonymity of the reporter or victim.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>No teaching during parties; parties are meant for everyone to enjoy.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Giving Feedback */}
          <div className="mb-12 fade-in-up delay-200">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-logo-purple-2/10 flex items-center justify-center mr-4 flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-logo-purple-2" />
              </div>
              <div>
                <h2 className="text-3xl font-sans text-gray-900 mb-4 font-bold">4. Giving Feedback to Fellow Students</h2>
                <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                  <p>
                    Do not offer unsolicited advice to fellow students. If you are struggling with a move, ask your teachers or assistants for help.
                  </p>
                  <p className="font-medium text-gray-900">If you are having difficulty executing a move during class or practica, we suggest the following questions to your partner:</p>
                  <div className="bg-zouk-light p-6 rounded-lg border border-gray-200 space-y-3">
                    <div className="flex items-start">
                      <span className="text-logo-purple-2 mr-3 mt-1">•</span>
                      <span className="text-gray-700 italic">"I think we are having trouble with this move; how does it feel for you?"</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-logo-purple-2 mr-3 mt-1">•</span>
                      <span className="text-gray-700 italic">"Is there anything I can do to make this move more comfortable for you?"</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-logo-purple-2 mr-3 mt-1">•</span>
                      <span className="text-gray-700 italic">"I don't quite feel your leading. Can we try again?"</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-logo-purple-2 mr-3 mt-1">•</span>
                      <span className="text-gray-700 italic">"Do you think we should ask for help from a teacher?"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Others */}
          <div className="mb-12 fade-in-up delay-200">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-logo-purple-2/10 flex items-center justify-center mr-4 flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-logo-purple-2" />
              </div>
              <div>
                <h2 className="text-3xl font-sans text-gray-900 mb-4 font-bold">5. Others</h2>
                <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>We permit alcoholic drinks during parties; please drink responsibly.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>Ensure you maintain proper hygiene when attending parties; wearing subtle perfume or deodorant is highly recommended, and bringing a spare change of clothes to change into after dancing is advisable.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>Don't judge others in their appearance, technique.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>When there is conflict, please resolve it in a civilized manner.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 pt-12 border-t border-gray-200 fade-in-up delay-300">
            <div className="bg-zouk-light p-8 rounded-lg text-center">
              <h3 className="text-2xl font-sans text-gray-900 mb-4 font-bold">Questions or Concerns?</h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Code of Conduct or need to report an incident, please contact PTZ teachers and staff.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-medium tracking-widest uppercase hover:bg-logo-purple-2 hover:text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CodeOfConductPage;
