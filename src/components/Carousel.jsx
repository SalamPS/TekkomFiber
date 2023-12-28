'use client'

import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const checkImageExistence = async (src) => {
  try {
    const response = await fetch(src);
    return response.ok;
  } catch (error) {
    return false;
  }
};

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
      {items.map((item, index) => {
        return (
          <Link key={index} href={`/components/${item.sector}/${item.type}`}>
            <div className='carous'>
              <div className="item">
                <Image
                  src={`/preview/${item.sector}-${item.type}-1.png`}
                  alt={`${item.sector} ${item.type}`}
                  className='img'
                  width={266}
                  height={150}
                  priority
                  onError={() => {console.log('Erro')}}
                />
                <div className="desc">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </Slider>
  );
};

export default Carousel;
