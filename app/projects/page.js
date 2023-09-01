"use client";
import "@/styles/projects.scss";
import AnimateText from "../components/AnimateText";
import { useEffect, useState } from "react";
import projectsList from "./projectsList";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [heading, setHeading] = useState("");
  useEffect(() => {
    setHeading("Projects");
  }, []);

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
