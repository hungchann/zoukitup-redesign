import React, { useEffect, useState } from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';

const StudioPage: React.FC = () => {
  const [studioUrl, setStudioUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [useIframe, setUseIframe] = useState(false);

  useEffect(() => {
    // Kiểm tra xem Studio có đang chạy không (development)
    // Trong production, bạn có thể deploy Studio riêng và dùng URL đó
    const devStudioUrl = 'http://localhost:3333';
    const prodStudioUrl = process.env.VITE_SANITY_STUDIO_URL || ''; // Set trong .env nếu deploy riêng

    // Nếu có production URL, dùng nó
    if (prodStudioUrl) {
      setStudioUrl(prodStudioUrl);
      setUseIframe(false);
      setIsLoading(false);
      return;
    }

    // Development: Thử kết nối đến local Studio
    fetch(devStudioUrl, { mode: 'no-cors' })
      .then(() => {
        setStudioUrl(devStudioUrl);
        setUseIframe(true);
        setIsLoading(false);
      })
      .catch(() => {
        // Studio không chạy, hiển thị hướng dẫn
        setIsLoading(false);
      });
  }, []);

  const handleBack = () => {
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-logo-purple-2 mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải Sanity Studio...</p>
        </div>
      </div>
    );
  }

  // Nếu không có Studio URL, hiển thị hướng dẫn
  if (!studioUrl) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-6 py-12">
          <button
            onClick={handleBack}
            className="mb-8 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Quay lại trang chủ
          </button>

          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">Sanity Studio</h1>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 text-yellow-900">
                Studio chưa được khởi động
              </h2>
              <p className="text-yellow-800 mb-4">
                Để sử dụng Sanity Studio, bạn cần:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-yellow-800">
                <li>Mở terminal và chạy lệnh:</li>
                <code className="block bg-yellow-100 p-3 rounded mt-2 mb-4">
                  cd studio-zoukitup && npm run dev
                </code>
                <li>Sau khi Studio chạy (thường ở http://localhost:3333), quay lại trang này</li>
                <li>Hoặc deploy Studio lên Sanity hosting và cấu hình URL trong file .env</li>
              </ol>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-900">
                Deploy Studio lên Sanity Hosting (Khuyến nghị)
              </h3>
              <p className="text-blue-800 mb-4">
                Để deploy Studio và truy cập từ bất kỳ đâu:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-blue-800 mb-4">
                <li>Chạy lệnh trong thư mục studio-zoukitup:</li>
                <code className="block bg-blue-100 p-3 rounded mt-2 mb-2">
                  npm run deploy
                </code>
                <li>Copy URL được cung cấp (ví dụ: https://your-project.sanity.studio)</li>
                <li>Tạo file .env trong root project và thêm:</li>
                <code className="block bg-blue-100 p-3 rounded mt-2">
                  VITE_SANITY_STUDIO_URL=https://your-project.sanity.studio
                </code>
              </ol>
              <a
                href="https://www.sanity.io/docs/deployment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                Xem hướng dẫn chi tiết <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Nếu có Studio URL, hiển thị iframe hoặc redirect
  if (useIframe) {
    return (
      <div className="min-h-screen bg-white">
        <div className="border-b border-gray-200 bg-white sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={handleBack}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mr-4"
              >
                <ArrowLeft size={20} className="mr-2" />
                Quay lại
              </button>
              <h1 className="text-lg font-semibold text-gray-900">Sanity Studio</h1>
            </div>
            <a
              href={studioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Mở trong tab mới <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>
        <iframe
          src={studioUrl}
          className="w-full h-[calc(100vh-73px)] border-0"
          title="Sanity Studio"
          allow="clipboard-read; clipboard-write"
        />
      </div>
    );
  }

  // Production: Redirect đến Studio URL
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600 mb-4">Đang chuyển hướng đến Sanity Studio...</p>
        <a
          href={studioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-logo-purple-2 text-white rounded-lg hover:bg-logo-purple-1 transition-colors"
        >
          Mở Sanity Studio <ExternalLink size={20} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default StudioPage;

