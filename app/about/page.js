"use client";
import AnimateText from "../components/AnimateText";
import { useEffect, useState, useCallback } from "react";
import "@/styles/about.scss";
import stackList from "./stackList";
import Image from "next/image";

export default function About() {
  const [heading, setHeading] = useState("");
  const [stack, setStack] = useState("");

  useEffect(() => {
    setHeading("About Me");
    setStack("Tech Stack");
  }, []);

  const handleAnimation = useCallback(() => {
    const texts = document.getElementsByClassName("about-text");
    Array.from(texts).forEach((text) => (text.style.animationName = "pulseIn"));
  }, []);

  return (
    <article className="about-page page">
      <div className="container">
        <AnimateText
          {...{
            index: 0,
            textStr: heading,
            bold: "bold",
            onAnimationEnd: handleAnimation,
          }}
        />
        <section className="content-container">
          <div id="text-container">
            <p className="about-text">
              As a passionate web developer, I am constantly seeking new
              challenges to enhance my skills and grow as a professional. My
              ultimate goal is to join a company that values collaboration and
              innovation, where I can work alongside experienced developers and
              learn from the best in the industry.
            </p>
            <p className="about-text">
              I am eager to contribute my expertise in crafting intuitive
              digital experiences, as well as my keen eye for design and
              diligent work ethic, to build cutting-edge solutions that make a
              real difference. With each new opportunity, I am excited to expand
              my capabilities and make meaningful contributions to the team.
            </p>
            <p className="about-text">
              If you are looking for a driven and enthusiastic web developer who
              is committed to excellence, then look no further. I am ready to
              take on any challenge and help your company achieve its goals.
              Let&#39;s work together to create something truly remarkable.
            </p>
          </div>
          <div id="stack-container">
            <AnimateText
              {...{
                index: 30,
                textStr: stack,
                bold: "small",
                onAnimationEnd: () =>
                  (document.getElementById("tech-stack").style.animationName =
                    "slideUp"),
              }}
            />

            <div id="tech-stack">
              {stackList.map(({ name, icon }, i) => {
                return (
                  <div key={name} className="stack-item">
                    <div id="tool-name">
                      <p>{name}</p>
                    </div>
                    <div id="tool-icon">
                      <Image width={50} height={50} src={icon} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
