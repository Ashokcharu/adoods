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
      style={{ 
        position: 'absolute',
        top: '60px',
        left: 0,
        right: 0,
        width: '100%',
        height: 'calc(100vh - 60px)',
        padding: 0,
        margin: 0,
        lineHeight: 0
      }}
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
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            margin: 0,
            objectFit: 'cover',
            objectPosition: 'center',
            padding: 0,
            display: i === index ? 'block' : 'none'
          }}
        />
      ))}
    </div>
  );
}
