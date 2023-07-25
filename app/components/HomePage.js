'use client';
import { useRef } from 'react';
import '@/styles/home.scss';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from 'next/link';
import { useTextToSpeech } from '@/context/store';

export default function HomePage () {
  const [setTextToSpeak, voicesLoaded] = useTextToSpeech();

  const COMMA_PAUSE = 300;
  const POINT_PAUSE = 600;

  const aboutRef = useRef();
  const contactRef = useRef();

  return (
    <article className='home-page page'>
      <div className='hero_title'>
        {voicesLoaded ? (
          <Typewriter
            options={{
              deleteSpeed: 1,
              delay: 35
            }}
            onInit={(typewriter) => {
              typewriter
                .callFunction(() => setTextToSpeak("Meet Marlon Baatjes"))
                .typeString('<span class="heading">Meet Marlon Baatjes </span>')
                .pauseFor(POINT_PAUSE)
                .typeString('<br/>')
                .callFunction(() => setTextToSpeak(
                  "a naturally curious individual and fast learner"
                ))
                .typeString('A naturally curious individual and fast learner')
                .pauseFor(COMMA_PAUSE)
                .callFunction(() => setTextToSpeak(
                  "always eager to explore the world of technology."
                ))
                .typeString(', always eager to explore the world of technology.')
                .pauseFor(POINT_PAUSE)
                .callFunction(() => setTextToSpeak(
                  "Unleashing his inner IT superhero"
                ))
                .typeString(' Unleashing his inner IT superhero')
                .pauseFor(COMMA_PAUSE)
                .callFunction(() => setTextToSpeak(
                  ", Marlon effortlessly navigates through the intricate interfaces of various devices"
                ))
                .typeString(', Marlon effortlessly navigates through the intricate interfaces of various devices')
                .pauseFor(POINT_PAUSE * 2)
                .callFunction(() => setTextToSpeak(
                  "making tech magic happen!"
                ))
                .typeString(', making tech magic happen!')
                .pauseFor(POINT_PAUSE)
                .callFunction(() => setTextToSpeak(
                  "Let’s explore his fascinating world!"
                ))
                .typeString(' Let’s explore his fascinating world!')
                .callFunction(() => aboutRef.current.classList.add('flip'))
                .callFunction(() => contactRef.current.classList.add('flip'))
                .start();
            }}
          />) : (
          <div className="loader">
            <Image src="/Bean Eater-1s-200px.svg" alt="" width={200} height={200} />
          </div>
        )}

        <div className='hero_title__buttons'>
          <Link href='/about'>
            <button ref={aboutRef}>
              Explore Marlon&#39;s World
            </button>
          </Link>
          <Link href='/contact'>
            <button ref={contactRef} className="contact">
              Contact Marlon
            </button>
          </Link>
        </div>

      </div>

      <div className="hero_image">
        <Image
          priority={true}
          src='/1907.i109.039.p.m004.c30.programming development isometric icons-02 [Converted].svg'
          alt='Illustration of software engineer'
          width={450}
          height={450}
        />
      </div>
    </article>
  );
};
