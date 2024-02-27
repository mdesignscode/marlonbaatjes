"use client"

import { useEffect, useState } from "react";

export default function useIsMobile() {
  const [windowWidth, detectWidth] = useState(window.innerWidth);
  const detectSize = () => {
    detectWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowWidth]);

  return windowWidth < 769 // mobile
}
