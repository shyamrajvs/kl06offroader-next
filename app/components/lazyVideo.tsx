import { useState, useRef, useEffect } from 'react';

interface LazyVideoProps {
  src: string;
  type: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ src, type }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // Track if video is fully loaded
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '200px', // Load video 200px before it enters the viewport
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  // Handle video loaded event
  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative w-full h-full">
      {/* Loading Spinner */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      )}

      {/* Video Element */}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover rounded-t-lg transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay={isVisible}
        loop
        muted
        playsInline
        preload={isVisible ? 'auto' : 'metadata'}
        onLoadedData={handleLoadedData} // Trigger loading completion
      >
        {isVisible && <source src={src} type={type} />}
      </video>

      <style jsx>{`
        .loader {
          border-top-color: #1cd440;
          animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LazyVideo;
