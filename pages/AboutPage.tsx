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
    <div className="min-h-screen bg-zouk-black text-stone-200 font-sans selection:bg-logo-purple-2 selection:text-white">
      <Navigation />
      
      <section className="py-24 bg-zouk-black text-white relative overflow-hidden pt-32">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <button
            onClick={handleBackToHome}
            className="mb-8 flex items-center text-stone-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-widest">Về trang chủ</span>
          </button>

          {/* Main Header */}
          <div className="text-center mb-20 fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
              PTZouk Vietnam - <span className="text-logo-purple-2 italic">Zoukiup</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-logo-purple-2 to-transparent mx-auto"></div>
          </div>

          {/* Introduction Section */}
          <div className="max-w-4xl mx-auto mb-20 fade-in-up delay-100">
            <div className="space-y-6 text-stone-300 font-light text-lg leading-relaxed">
              <p className="text-xl text-white font-normal">
                Thành lập vào năm 2019, PTZ - Phuong & Trang Zouk Vietnam - là studio hàng đầu về Brazilian Zouk tại Hà Nội, cam kết dẫn đầu trong việc lan tỏa điệu nhảy này trong cộng đồng địa phương.
              </p>
              <p>
                Chúng tôi cung cấp lịch trình toàn diện bao gồm các lớp học hàng tuần, social dancing, và các sự kiện Brazilian Zouk thường xuyên. Giáo trình của chúng tôi được cập nhật liên tục để tích hợp những phát triển mới nhất trên toàn cầu về Zouk, và các bữa tiệc của chúng tôi có những bản mix không ngừng, trực tiếp từ các DJ địa phương của chúng tôi.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-4xl mx-auto fade-in-up delay-200">
            <div className="text-center border border-white/10 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors">
              <Calendar className="w-8 h-8 mx-auto mb-4 text-logo-purple-2" />
              <span className="block text-3xl font-serif text-white mb-2">2019</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Thành lập</span>
            </div>
            <div className="text-center border border-white/10 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors">
              <Trophy className="w-8 h-8 mx-auto mb-4 text-logo-purple-2" />
              <span className="block text-3xl font-serif text-white mb-2">2018</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Giải thưởng đầu tiên</span>
            </div>
            <div className="text-center border border-white/10 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors">
              <Music className="w-8 h-8 mx-auto mb-4 text-logo-purple-2" />
              <span className="block text-3xl font-serif text-white mb-2">2022</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Zouk It Up</span>
            </div>
            <div className="text-center border border-white/10 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors">
              <Globe className="w-8 h-8 mx-auto mb-4 text-logo-purple-2" />
              <span className="block text-3xl font-serif text-white mb-2">10+</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Nghệ sĩ quốc tế</span>
            </div>
          </div>

          {/* Iconic Events Section */}
          <div className="mb-20 fade-in-up delay-300">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-logo-purple-2">
                Sự kiện biểu tượng và tầm ảnh hưởng quốc tế
              </h2>
              <div className="space-y-4 text-stone-300 font-light leading-relaxed">
                <p>
                  Từ năm 2022, PTZ là nơi tổ chức sự kiện biểu tượng <span className="text-white font-normal">Zouk It Up</span>. Chúng tôi cam kết tổ chức những sự kiện tốt nhất của thành phố bằng cách mời các nghệ sĩ được công nhận quốc tế để quảng bá Brazilian Zouk và Lambada tại Hà Nội.
                </p>
                <p className="text-white font-normal mt-6 mb-3">Các khách mời danh dự của chúng tôi đã bao gồm:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-6 border-l-2 border-logo-purple-2/30">
                  {artists.map((artist) => (
                    <div key={artist} className="flex items-center text-stone-300">
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
              <h2 className="text-3xl md:text-4xl font-serif mb-8 text-logo-purple-2">
                Gặp gỡ những người sáng lập: Hoài Phương & Huyền Trang
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-white/10 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors">
                  <h3 className="text-xl font-serif mb-4 text-white">
                    Trang <span className="text-logo-purple-2 text-sm font-normal">(Friday Night)</span>
                  </h3>
                  <p className="text-stone-300 font-light leading-relaxed">
                    Năng động, sôi nổi và đầy sức sống, luôn có nụ cười xinh đẹp và tư thế duyên dáng trên sàn nhảy.
                  </p>
                </div>
                <div className="border border-white/10 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors">
                  <h3 className="text-xl font-serif mb-4 text-white">
                    Phương <span className="text-logo-purple-2 text-sm font-normal">(Sunday Morning with Hot Black Coffee)</span>
                  </h3>
                  <p className="text-stone-300 font-light leading-relaxed">
                    Bắt đầu chậm, dành thời gian để lọc, nhưng sau đó bùng nổ với năng lượng mạnh mẽ cả với tư cách DJ và vũ công.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-stone-400 font-light italic">
                Hoài Phương và Huyền Trang bắt đầu hợp tác nhảy múa vào cuối năm 2017. Mối quan hệ đối tác hơn năm năm của họ được đặc trưng bởi phong cách tương phản nhưng hài hòa.
              </p>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-20 fade-in-up delay-300">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif mb-8 text-logo-purple-2">
                Thành tựu và đóng góp
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-logo-purple-2 pl-6">
                  <h3 className="text-xl font-serif mb-4 text-white flex items-center">
                    <Award className="w-6 h-6 mr-3 text-logo-purple-2" />
                    Giải thưởng quốc tế đầu tiên
                  </h3>
                  <p className="text-stone-300 font-light">
                    Phương và Trang đã giành được giải thưởng quốc tế đầu tiên vào năm 2018, đạt vị trí thứ 2 trong cuộc thi ProAm tại ZoukSEA.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border border-white/10 p-6 rounded-lg">
                    <h3 className="text-xl font-serif mb-4 text-white flex items-center">
                      <Globe className="w-6 h-6 mr-3 text-logo-purple-2" />
                      Trong nước
                    </h3>
                    <ul className="space-y-2 text-stone-300 font-light">
                      {nationalEvents.map((event) => (
                        <li key={event} className="flex items-start">
                          <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2"></span>
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border border-white/10 p-6 rounded-lg">
                    <h3 className="text-xl font-serif mb-4 text-white flex items-center">
                      <Globe className="w-6 h-6 mr-3 text-logo-purple-2" />
                      Quốc tế
                    </h3>
                    <ul className="space-y-2 text-stone-300 font-light">
                      {internationalEvents.map((event) => (
                        <li key={event} className="flex items-start">
                          <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2"></span>
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border border-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-serif mb-4 text-white flex items-center">
                    <Users className="w-6 h-6 mr-3 text-logo-purple-2" />
                    Các đại hội quốc tế đã tham dự
                  </h3>
                  <p className="text-stone-300 font-light mb-4">
                    Ngoài việc biểu diễn, Phương và Trang tích cực quảng bá Zouk Việt Nam và mời các nghệ sĩ uy tín đến giảng dạy tại Việt Nam. Họ đã tham dự các đại hội Zouk quốc tế lớn trên toàn thế giới, bao gồm:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-6">
                    {congresses.map((congress) => (
                      <div key={congress} className="flex items-center text-stone-300">
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
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
