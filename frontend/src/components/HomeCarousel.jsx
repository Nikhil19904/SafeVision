import React from "react";
import Slider from "react-slick";

const banners = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc05f?auto=format&fit=crop&w=1600&q=80",
    title: "Top Deals on CCTV Cameras",
    subtitle: "Get up to 40% off on bestsellers",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1621842067562-43028f1e8726?auto=format&fit=crop&w=1600&q=80",
    title: "Smart Door Locks",
    subtitle: "Secure your home with smart solutions",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1606813903082-3d74e1b15d9f?auto=format&fit=crop&w=1600&q=80",
    title: "Wires & Accessories",
    subtitle: "Everything you need for installation",
  },
];

export default function HomeCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full max-w-7xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-lg">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="relative">
            <img
              src={banner.img}
              alt={banner.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start px-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                {banner.title}
              </h2>
              <p className="text-lg text-gray-200">{banner.subtitle}</p>
              <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
