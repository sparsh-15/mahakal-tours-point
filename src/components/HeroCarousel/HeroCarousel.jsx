import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

const MediaCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);
  const intervalRef = useRef(null);

  // Sample media data - replace with your actual content
  const mediaItems = [
    {
      type: "image",
      src: "https://images.cnbctv18.com/uploads/2024/10/mahakaleshwar-temple-ujjain-2024-10-5e82f1d718c21e6f98b8040456adaf4c.jpg",
      title: "Mahakaleshwar Temple",
      description: "Experience the divine atmosphere of the ancient Mahakaleshwar Temple"
    },
    {
      type: "image",
      src: "https://s7ap1.scene7.com/is/image/incredibleindia/ujjain%20city-ujjain-madhya-pradesh-hero?qlt=82&ts=1726675111784",
      poster: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Ujjain City Tour",
      description: "Take a virtual tour of the sacred city of Ujjain"
    },
    {
      type: "image",
      src: "https://i.pinimg.com/736x/09/29/b6/0929b612a990073813c7a0beb4379dbf.jpg",
      title: "Scenic Mountain Views",
      description: "Breathtaking landscapes on our mountain tour packages"
    },
    {
      type: "image",
      src: "https://www.shutterstock.com/shutterstock/photos/2173332103/display_1500/stock-photo--feb-exterior-view-of-mahakaleshwar-temple-ujjain-madhya-pradesh-india-asia-2173332103.jpg",
      title: "Heritage Architecture",
      description: "Explore magnificent historical monuments and architecture"
    },
    {
      type: "video",
      src: "https://player.vimeo.com/external/371433846.sd.mp4?s=236ffd183c3fb9b5ca5b53e9061a5b1df5f3e08e&profile_id=139&oauth2_token_id=57447761",
      poster: "https://images.moneycontrol.com/static-hindinews/2025/01/Mahakumbh02A.jpg?impolicy=website&width=1600&height=900",
      title: "Cultural Experience",
      description: "Immerse yourself in local traditions and cultural experiences"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, mediaItems.length]);

  // Handle video controls
  useEffect(() => {
    const currentVideo = videoRefs.current[currentSlide];
    if (currentVideo && mediaItems[currentSlide].type === 'video') {
      currentVideo.muted = isMuted;
      if (isPlaying) {
        currentVideo.play().catch(() => {
          // Handle autoplay restrictions
        });
      } else {
        currentVideo.pause();
      }
    }

    // Pause all other videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentSlide) {
        video.pause();
      }
    });
  }, [currentSlide, isPlaying, isMuted]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Main Carousel Container */}
      <div className="relative w-full h-full flex">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`w-full h-full flex-shrink-0 transition-transform duration-1000 ease-in-out`}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            <div className="relative w-full h-full">
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-full object-cover"
                  poster={item.poster}
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <div className="max-w-4xl">
                  <h2 className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-800 ${
                    index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    {item.title}
                  </h2>
                  <p className={`text-lg md:text-xl opacity-90 max-w-2xl transition-all duration-800 delay-200 ${
                    index === currentSlide ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Media Controls */}
      <div className="absolute top-4 md:top-8 right-4 md:right-8 flex space-x-3">
        <button
          onClick={togglePlayPause}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>

        {mediaItems[currentSlide].type === 'video' && (
          <button
            onClick={toggleMute}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
        )}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {mediaItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-orange-500 transition-all duration-300"
          style={{
            width: `${((currentSlide + 1) / mediaItems.length) * 100}%`,
          }}
        />
      </div>

    </div>
  );
};

export default MediaCarousel;