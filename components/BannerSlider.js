"use client";
import { useState, useEffect } from 'react';

export default function BannerSlider() {
  const banners = ['/banner1.jpg', '/banner2.jpg', '/banner3.jpg'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % banners.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{width:'100%', height:'400px', overflow:'hidden', position:'relative'}}>
      {banners.map((src, i) => (
        <img key={i} src={src} alt={`Banner ${i}`} style={{
          width:'100%', height:'400px', objectFit:'cover', position:'absolute', top:0, left:0,
          opacity: i===index ? 1 : 0, transition:'opacity 1s ease-in-out'
        }} />
      ))}
    </div>
  )
}
