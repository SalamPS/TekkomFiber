import Slider from 'react-slick';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index}>
          <Image
            src={`/${sector}-${visit}.png`}
            alt={`${sector} ${visit}`}
            width={355}
            height={200}
            priority
          />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
