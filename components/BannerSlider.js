"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BannerSlider() {
  const router = useRouter();
  const banners = ["/img/banner1.png", "/img/banner2.png"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % banners.length), 3000);
    return () => clearInterval(timer);
  }, []);

  const handleBannerClick = () => {
    router.push('/shop');
  };

  return (
    <div 
      className="banner" 
      onClick={handleBannerClick}
      style={{ cursor: 'pointer' }}
    >
      {banners.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Banner ${i}`}
          className="banner-img"
          style={{
            opacity: i === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            position: "absolute",
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      ))}
    </div>
  );
}
