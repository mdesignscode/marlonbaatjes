"use client";
import "@/styles/projects.scss";
import AnimateText from "../components/AnimateText";
import { useEffect, useState } from "react";
import projectsList from "./projectsList";
import Image from "next/image";
import Link from "next/link";

export default function Page () {
  const [heading, setHeading] = useState("");
  useEffect(() => {
    setHeading("Projects");
  }, []);

  const triviaManiaFeatures = [
    "Explore a vast array of intriguing questions, keeping users entertained and enlightened.",
    "Immerse yourself in an intuitive and visually captivating interface, enhancing the gaming experience.",
    "Trivia Mania seamlessly adapts to various screen sizes, ensuring a fantastic experience on all devices.",
    "My commitment to clean, maintainable code ensures a smooth development process and easy troubleshooting.",
    "The well-structured project layout exemplifies my dedication to an efficient development workflow.",
    "I've implemented extensive unit testing to guarantee the project's reliability.",
    "Trivia Mania employs effective data management and communication, resulting in smooth game play and content updates.",
  ],
    triviaManiaStack = [
      ["Typescript", "/tech-stack/typescript-svgrepo-com.svg"],
      ["NextJS", "/tech-stack/nextjs-fill-svgrepo-com.svg"],
      ["NodeJS", "/tech-stack/nodejs-icon-svgrepo-com.svg"],
      ["React Query", "/tech-stack/react-query-seeklogo.com.svg"],
      ["Tailwind Css", "/tech-stack/tailwind-svgrepo-com.svg"],
      ["Axios", "/tech-stack/axios.svg"],
      ["Clerk.js", "/tech-stack/Clerk.js.png"],
      ["Framer Motion", "/tech-stack/framer-motion.svg"],
      ["Headless UI", "/tech-stack/headless-ui-seeklogo.com.svg"],
      ["React Testing Library", "/tech-stack/testing-library-seeklogo.com.svg"],
      ["Jest.js", "/tech-stack/jest-snapshot-svgrepo-com.svg"],
      ["Material UI", "/tech-stack/material-ui-svgrepo-com.svg"],
      ["Styled Components", "/tech-stack/styled-components-svgrepo-com.svg"],
    ];

  const handleAnimation = () => {
    const projects = document.getElementsByClassName("project");
    const options = {
      root: document.querySelector(".content-container"),
      rootMargin: "0px",
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationName = "slideIn";
          observer.unobserve(entry.target);
        }
      });
    }, options);

    Array.from(projects).forEach((project) => observer.observe(project));
  };

  return (
    <article className="projects-page page">
      <div className="container">
        <AnimateText
          {...{
            index: 0,
            textStr: heading,
            bold: "bold",
            onAnimationEnd: handleAnimation
          }}
        />

        <section className="content-container">
          <div className="project">
            <div className="project-title">
              <h2>Trivia Mania</h2>

              <div className="buttons">
                <Link target="_blank" href="https://73ca-41-116-160-197.ngrok-free.app">
                  Live Demo
                </Link>
                <Link target="_blank" href="https://github.com/mdesignscode/trivia_mania">
                  Source Code
                </Link>
              </div>
            </div>

            <div className="project-description">
              <div className="description">
                <Image
                  src="/projects/trivia-mania.jpg"
                  alt=""
                  width={400}
                  height={300}
                />
                <p>
                  Trivia Mania is not just a game; it&apos;s a journey through the heart of web development. This project emerged from a passion for creating an engaging and dynamic experience for trivia enthusiasts. With a diverse range of carefully curated questions spanning various topics, Trivia Mania offers something for everyone.
                </p>
              </div>
              <div className="more-info">
                <div className="features">
                  <h3>Key Features</h3>
                  <div className="features-list">
                    {triviaManiaFeatures.map((feature, j) => {
                      return <p key={`feature_${j}`}>{feature}</p>;
                    })}
                  </div>
                </div>
                <div className="tech-stack">
                  <h3>Tech Stack</h3>
                  <div className="tech-stack-list">
                    {triviaManiaStack.map((stackItem, j) => {
                      return (
                        <div className="stack-item" key={`stackItem_${j}`}>
                          <Image
                            src={stackItem[1]}
                            alt=""
                            width={50}
                            height={50}
                          />
                          <p>{stackItem[0]}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {projectsList.map((project, i) => {
            return (
              <div className="project" key={project.title}>
                <div className="project-title">
                  <h2>{project.title}</h2>

                  <div className="buttons">
                    <Link target="_blank" href={project.live}>
                      Live Demo
                    </Link>
                    <Link target="_blank" href={project.code}>
                      Source Code
                    </Link>
                  </div>
                </div>

                <div className="project-description">
                  <div className="description" key={`project_${i}`}>
                    <Image
                      src={project.preview}
                      alt=""
                      width={400}
                      height={300}
                    />
                    <p>{project.description}</p>
                  </div>
                  <div className="more-info">
                    <div className="features">
                      <h3>Key Features</h3>
                      <div className="features-list">
                        {project.keyFeatures.map((feature, j) => {
                          return <p key={`feature_${j}`}>{feature + "."}</p>;
                        })}
                      </div>
                    </div>
                    <div className="tech-stack">
                      <h3>Tech Stack</h3>
                      <div className="tech-stack-list">
                        {project.techStack.map((stackItem, j) => {
                          return (
                            <div className="stack-item" key={`stackItem_${j}`}>
                              <Image
                                src={stackItem[1]}
                                alt=""
                                width={50}
                                height={50}
                              />
                              <p>{stackItem[0]}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </article>
  );
}
