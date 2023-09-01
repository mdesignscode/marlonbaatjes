'use client';
import '@/styles/animateText.scss';
import { useEffect } from 'react';

export default function AnimateText ({ textStr, index, bold, onAnimationEnd }) {
  const text = textStr.split('');

  useEffect(() => {
    if (text.length) {
      const animatedTexts = document.getElementsByClassName('animate-text');

      Array.from(animatedTexts).forEach((animatedText, i) => {
        const delay = Number(animatedText.classList[1]);
        animatedText.style.animationDelay = `${delay * 100}ms`;

        animatedText.addEventListener('animationend', () => {
          animatedText.style.animationDelay = '';
          animatedText.classList = ['hover-animate'];
          if (onAnimationEnd && i === text.length - 1)
            onAnimationEnd();
        });
      });
    }
  }, [text, onAnimationEnd]);


  return (
    <div className={`animated_text ${bold}`}>
      {text.map((letter, i) => {
        return (
          <span
            className={`animate-text ${index + i}`}
            key={`letter_${i}`}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
}
