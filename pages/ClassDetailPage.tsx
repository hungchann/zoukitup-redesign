import React from 'react';
import { ArrowLeft, Clock, MapPin, Users, Target, BookOpen, CheckCircle, MessageCircle, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { classes } from '../data/classes';

interface ClassDetailPageProps {
  classSlug: string;
}

const ClassDetailPage: React.FC<ClassDetailPageProps> = ({ classSlug }) => {
  const classData = classes.find(cls => cls.slug === classSlug);

  if (!classData) {
    return (
      <div className="min-h-screen bg-zouk-black text-stone-200 font-sans">
        <Navigation />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-zelda mb-4">Lớp học không tìm thấy</h1>
          <a href="#classes-page" className="text-logo-purple-2 hover:underline">
            Quay lại danh sách lớp học
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBackToClasses = () => {
    window.location.hash = 'classes-page';
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-zouk-black text-stone-200 font-sans selection:bg-logo-purple-2 selection:text-white">
      <Navigation />
      
      <section className="py-24 bg-zouk-black text-white relative overflow-hidden pt-32">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Back Button */}
          <button
            onClick={handleBackToClasses}
            className="mb-8 flex items-center text-stone-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-widest">Về danh sách lớp học</span>
          </button>

          {/* Class Header */}
          <div className="mb-12 fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-4 py-2 text-xs rounded uppercase tracking-wider ${
                classData.level === 'Cơ bản' ? 'bg-logo-purple-3/30 text-logo-purple-2 border border-logo-purple-2/30' :
                classData.level === 'Trung cấp' ? 'bg-logo-purple-4/30 text-logo-purple-1 border border-logo-purple-1/30' :
                classData.level === 'Nâng cao' ? 'bg-zouk-gold/20 text-zouk-gold border border-zouk-gold/30' :
                'bg-white/10 text-white border border-white/20'
              }`}>
                {classData.level}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-zelda mb-6 leading-tight">
              {classData.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-logo-purple-2 to-transparent mb-6"></div>
            <p className="text-stone-300 font-light text-lg leading-relaxed max-w-3xl">
              {classData.description}
            </p>
          </div>

          {/* Video Demo Section */}
          {classData.videoUrl && (
            <div className="mb-12 fade-in-up delay-100">
              <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10">
                <iframe
                  src={classData.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${classData.title} Demo Video`}
                ></iframe>
              </div>
            </div>
          )}

          {/* Class Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 fade-in-up delay-200">
            <div className="border border-white/10 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 mr-3 text-logo-purple-2" />
                <h3 className="text-xl font-zelda text-white">Lịch học</h3>
              </div>
              <p className="text-stone-300 font-light">{classData.schedule}</p>
              {classData.firstClass && (
                <div className="mt-3 flex items-center text-stone-400 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Lớp đầu tiên: {classData.firstClass}
                </div>
              )}
            </div>

            <div className="border border-white/10 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 mr-3 text-logo-purple-2" />
                <h3 className="text-xl font-zelda text-white">Địa điểm</h3>
              </div>
              <p className="text-stone-300 font-light">{classData.location}</p>
            </div>

            <div className="border border-white/10 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors md:col-span-2">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 mr-3 text-logo-purple-2" />
                <h3 className="text-xl font-zelda text-white">Giảng viên</h3>
              </div>
              <p className="text-stone-300 font-light text-lg">
                {classData.instructors}
              </p>
              <p className="text-stone-400 font-light text-sm mt-2">
                Learn from experienced instructors who have conquered many international dance floors. They will provide step-by-step guidance, helping you build a solid foundation and gain the confidence to truly shine on the dance floor.
              </p>
            </div>
          </div>

          {/* Class Goals */}
          <div className="mb-12 fade-in-up delay-300">
            <div className="flex items-center mb-6">
              <Target className="w-6 h-6 mr-3 text-logo-purple-2" />
              <h2 className="text-3xl font-zelda text-white">Mục tiêu lớp học</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {classData.goals.map((goal, index) => (
                <div key={index} className="border border-white/10 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 text-logo-purple-2 mt-1 flex-shrink-0" />
                    <p className="text-stone-300 font-light">{goal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What You Will Learn */}
          <div className="mb-12 fade-in-up delay-300">
            <div className="flex items-center mb-6">
              <BookOpen className="w-6 h-6 mr-3 text-logo-purple-2" />
              <h2 className="text-3xl font-zelda text-white">Bạn sẽ học gì</h2>
            </div>
            <div className="border border-white/10 p-6 rounded-lg">
              <ul className="space-y-3">
                {classData.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="flex items-start text-stone-300 font-light">
                    <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Entry Requirements */}
          <div className="mb-12 fade-in-up delay-300">
            <h2 className="text-3xl font-zelda text-white mb-6">Yêu cầu đầu vào</h2>
            <div className="border border-white/10 p-6 rounded-lg bg-gradient-to-r from-logo-purple-2/5 to-transparent">
              <p className="text-stone-300 font-light mb-4">Lớp học này phù hợp với:</p>
              <ul className="space-y-2">
                {classData.entryRequirements.map((req, index) => (
                  <li key={index} className="flex items-start text-stone-300 font-light">
                    <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Registration Section */}
          <div className="border-t border-white/10 pt-12 fade-in-up delay-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-zelda text-white mb-4">
                Sẵn sàng bắt đầu hành trình của bạn?
              </h2>
              <p className="text-stone-300 font-light text-lg mb-8">
                Đừng bỏ lỡ cơ hội trở thành một phần của cộng đồng PTZ ấm áp, đam mê và năng động!
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              {classData.zaloLink && (
                <a
                  href={classData.zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#0068FF] text-white font-medium tracking-widest uppercase hover:bg-[#0052CC] transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Đăng ký qua Zalo
                </a>
              )}
              {classData.messengerLink && (
                <a
                  href={classData.messengerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#0084FF] text-white font-medium tracking-widest uppercase hover:bg-[#0066CC] transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Đăng ký qua Messenger
                </a>
              )}
              {!classData.zaloLink && !classData.messengerLink && (
                <button className="px-8 py-4 bg-white text-black font-medium tracking-widest uppercase hover:bg-logo-purple-2 hover:text-white transition-all duration-300 min-w-[200px]">
                  Liên hệ đăng ký
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClassDetailPage;
