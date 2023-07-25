'use client';
import { useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { useTextToSpeech } from '@/context/store';
import Image from 'next/image';
import Link from 'next/link';

export default function About () {
  const [setTextToSpeak, voicesLoaded] = useTextToSpeech();

  const projectsRef = useRef();

  const COMMA_PAUSE = 300;
  const POINT_PAUSE = 600;

  return (
    <article className='about-page page'>
      <div className='hero_title'>

        {voicesLoaded ? (<Typewriter
          options={{
            deleteSpeed: 1,
            delay: 50
          }}
          onInit={(typewriter) => {
            typewriter
              .callFunction(() => setTextToSpeak('About Marlon'))
              .typeString("<span class='heading'>About Marlon</span>")
              .pauseFor(POINT_PAUSE)
              .typeString('<br/>')
              .callFunction(() => setTextToSpeak('Marlon’s inquisitive nature led him to tinker with devices from a young age'))
              .typeString("Marlon’s inquisitive nature led him to tinker with devices from a young age.")
              .pauseFor(POINT_PAUSE)
              .callFunction(() => setTextToSpeak('Boldly unraveling gadgets’ functionalities and troubleshooting complex issues'))
              .typeString(" Boldly unraveling gadgets’ functionalities and troubleshooting complex issues,")
              .pauseFor(COMMA_PAUSE)
              .callFunction(() => setTextToSpeak("his insatiable curiosity fueled his reputation as the go-to 'IT' person."))
              .typeString(" his insatiable curiosity fueled his reputation as the go-to 'IT' person.")
              .pauseFor(POINT_PAUSE)
              .typeString('<br/>')
              .callFunction(() => setTextToSpeak("From delving deep into smartphones’ settings to exploring the Linux Operating System"))
              .typeString(" From delving deep into smartphones’ settings to exploring the Linux Operating System,")
              .pauseFor(COMMA_PAUSE)
              .callFunction(() => setTextToSpeak("Marlon’s self-driven journey expanded his expertise in programming, web development, and computer networking."))
              .typeString(" Marlon’s self-driven journey expanded his expertise in programming, web development, and computer networking.")
              .pauseFor(POINT_PAUSE)
              .deleteAll(1)
              .callFunction(() => setTextToSpeak("Marlon's Skillset"))
              .typeString("<span class='heading'>Marlon's Skillset</span>")
              .pauseFor(POINT_PAUSE)
              .typeString('<br/>')
              .callFunction(() => setTextToSpeak('Marlon’s skill set includes'))
              .typeString("Marlon’s skill set includes:")
              .pauseFor(COMMA_PAUSE)
              .typeString('<br/>')
              .callFunction(() => setTextToSpeak('Backend engineering using C'))
              .typeString("Backend engineering using C,")
              .pauseFor(COMMA_PAUSE)
              .callFunction(() => setTextToSpeak('Python'))
              .typeString(" Python")
              .pauseFor(COMMA_PAUSE)
              .callFunction(() => setTextToSpeak('MySQL'))
              .typeString(", MySQL")
              .pauseFor(COMMA_PAUSE)
              .callFunction(() => setTextToSpeak('Node.js'))
              .typeString(", Node.js")
              .pauseFor(COMMA_PAUSE)
              .callFunction(() => setTextToSpeak('and Express.js'))
              .typeString(" and Express.js.")
              .pauseFor(POINT_PAUSE * 2)
              .typeString('<br/>')
              .callFunction(() => setTextToSpeak('Frontend engineering using HTML, '))
              .typeString('Frontend engineering using HTML')
              .pauseFor(COMMA_PAUSE)
              .callFunction(() => setTextToSpeak('CSS'))
              .typeString(", CSS")
              .pauseFor(COMMA_PAUSE)
              .callFunction(() => setTextToSpeak('JavaScript'))
              .typeString(", JavaScript")
              .pauseFor(POINT_PAUSE * 2)
              .callFunction(() => setTextToSpeak('React'))
              .typeString(", React")
              .pauseFor(COMMA_PAUSE)
              .callFunction(() => setTextToSpeak('Scss'))
              .typeString(", Scss")
              .pauseFor(COMMA_PAUSE)
              .callFunction(() => setTextToSpeak('Bulma.css'))
              .typeString(", Bulma.css")
              .pauseFor(COMMA_PAUSE * 2)
              .callFunction(() => setTextToSpeak('and Next.js'))
              .typeString(" and Next.js.")
              .pauseFor(POINT_PAUSE * 2)
              .typeString('<br/>')
              .callFunction(() => setTextToSpeak('Technical Support Specialist skills including troubleshooting'))
              .typeString('Technical Support Specialist skills including troubleshooting')
              .pauseFor(POINT_PAUSE)
              .callFunction(() => setTextToSpeak('customer service'))
              .typeString(', customer service')
              .pauseFor(POINT_PAUSE)
              .callFunction(() => setTextToSpeak('operating systems'))
              .typeString(', operating systems')
              .pauseFor(POINT_PAUSE)
              .callFunction(() => setTextToSpeak('and computer networking'))
              .typeString(', and computer networking')
              .pauseFor(POINT_PAUSE)
              .typeString('<br/>')
              .callFunction(() => setTextToSpeak(
                "Now let's explore projects Marlon has worked on"
              ))
              .typeString(
                "Now let's explore projects Marlon has worked on"
              )
              .callFunction(() => projectsRef.current.classList.add('flip'))
              .start();
          }}
        />) : (
          <div className="loader">
            <Image src="/Bean Eater-1s-200px.svg" alt="" width={200} height={200} />
          </div>
        )}

        <div className='hero_title__buttons'>
          <Link href='/projects'>
            <button ref={projectsRef}>Projects</button>
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
