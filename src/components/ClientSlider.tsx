import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const clients = [
  { image: 'https://asimatch.com/images/2018-04-ntt.png', name: 'NTT' },
  { image: 'https://asimatch.com/images/2018-04-tech.jpg', name: 'Tech' },
  { image: 'https://asimatch.com/images/2017-09-aimjp.jpg', name: 'AIM' },
  { image: 'https://asimatch.com/images/2018-04-dbj.jpg', name: 'DBJ' },
  { image: 'https://asimatch.com/images/2017-09-bemax.png', name: 'Bemax' },
  { image: 'https://asimatch.com/images/2017-09-amazon.jpg', name: 'Amazon' },
  { image: 'https://asimatch.com/images/2017-09-mirai.png', name: 'Mirai' },
  { image: 'https://asimatch.com/images/2017-09-zagzag.png', name: 'Zagzag' },
  { image: 'https://asimatch.com/images/2017-09-gmo.png', name: 'GMO' },
  { image: 'https://asimatch.com/images/2017-09-rakuten.png', name: 'Rakuten' },
  { image: 'https://asimatch.com/images/2017-09-google.png', name: 'Google' },
  { image: 'https://asimatch.com/images/2017-09-yahoo.png', name: 'Yahoo' },
  { image: 'https://asimatch.com/images/2017-09-chugokudenryoku.png', name: 'Chugoku Electric Power' },
];

export function ClientSlider() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    },
  });

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          取引先
        </h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-[0_0_33.33%] min-w-0 px-4"
              >
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-32 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}