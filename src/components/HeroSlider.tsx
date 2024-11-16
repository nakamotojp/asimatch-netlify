import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const slides = [
  {
    image: 'https://source.unsplash.com/random/1920x1080?technology',
    title: 'AI開発で未来を創る',
    description: '最新のAI技術で企業の課題を解決',
    link: '#services',
  },
  {
    image: 'https://source.unsplash.com/random/1920x1080?business',
    title: 'ビジネスの可能性を広げる',
    description: 'アジアのビジネスマッチングを加速する',
    link: '#services',
  },
  // Add more slides as needed
];

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <div className="relative mt-16">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0"
            >
              <a href={slide.link} className="block relative h-[80vh] min-h-[500px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50">
                  <div className="container mx-auto h-full flex items-center px-4">
                    <div className="text-white">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-xl md:text-2xl">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}