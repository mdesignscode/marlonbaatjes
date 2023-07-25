'use client';
import { useEffect, useMemo, useState, Suspense } from 'react';
import projects from './projectsList';
import ActiveSlide from './activeSlide';
import Image from 'next/image';

export default function Carousel () {
  // active slide
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [CurrentSlide, setCurrentSlide] = useState(null);

  const sliderMarks = useMemo(() => {
    const markers = [];
    for (let index = 0; index < projects.length; index++) {
      const sliderMarker = <span
        className={index === 0 ? 'slider__mark_marker marker-active' : 'slider__mark_marker'}
        key={`marker_${index}`}
        onPointerDown={() => setCurrentSlideIndex(index)}
      />;
      markers.push(sliderMarker);
    }
    return markers;
  }, []);

  // set active marker and current slide
  useEffect(() => {
    // clear speech on slide change
    window.speechSynthesis.cancel();

    const markers = document.querySelectorAll('.slider__mark_marker');
    for (let index = 0; index < markers.length; index++) {
      const marker = markers[index];
      if (index === currentSlideIndex) {
        marker.classList.add('marker-active');
      } else {
        marker.classList.remove('marker-active');
      }
    }
    const ActiveSlideObj = projects[currentSlideIndex];
    setCurrentSlide(<ActiveSlide {...ActiveSlideObj} />);
  }, [currentSlideIndex]);

  useEffect(() => {
    console.log(CurrentSlide ? 'Slide loaded' : 'Slide loading...');
  }, [CurrentSlide]);

  return (
    <>
      <span className='navigation navigate-previous'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="50"
          height="50"
          onClick={() => {
            if (currentSlideIndex === 0)
              setCurrentSlideIndex(projects.length - 1);
            else
              setCurrentSlideIndex(currentSlideIndex - 1);
          }}
        >
          <path fill="#b84e7d" d="M11 18a.997.997 0 0 1-.707-.293L4.586 12l5.707-5.707a1 1 0 1 1 1.414 1.414L7.414 12l4.293 4.293a1 1 0 0 1-.707 1.707z" />
        </svg>
      </span>

      <div className='slider__container'>
        {CurrentSlide ? CurrentSlide : <div className="loader">
          <Image src="/Bean Eater-1s-200px.svg" alt="" width={200} height={200} />
        </div>}

        <div className='slider__mark'>
          {sliderMarks}
        </div>
      </div>

      <span className='navigation navigate-next'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="50"
          height="50"
          onClick={() => {
            if (currentSlideIndex === projects.length - 1)
              setCurrentSlideIndex(0);
            else
              setCurrentSlideIndex(currentSlideIndex + 1);
          }}
        >
          <path fill="#b84e7d" d="M9.41 7.41L10.83 6l6 6-6 6-1.42-1.41L14.01 12z" />
        </svg>
      </span>
    </>
  );
};
