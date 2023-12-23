import Slider from 'react-slick';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

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
        <Link key={index} href={`/components/${item.sector}/${item.type}`}>
          <div className='carous'>
            <div className="item">
              <Image
                src={`/${item.sector}-${item.type}.png`}
                alt={`${item.sector} ${item.type}`}
                className='img'
                width={266}
                height={150}
                priority
              />
              <div className="desc">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Slider>
  );
};

export default Carousel;
