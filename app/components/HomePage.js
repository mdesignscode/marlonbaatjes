"use client";
import "@/styles/home.scss";
import Image from "next/image";
import Link from "next/link";
import AnimateText from "./AnimateText";
import { useState, useEffect, useCallback } from "react";

export default function HomePage() {
  const [name, setName] = useState("");
  const [hi, setHi] = useState("");
  const [profession, setProfession] = useState("");
  const [roles, setRoles] = useState("");

  const handleAnimation = useCallback(() => {
    const button = document.querySelector(".hero_contact");
    button.style.animation = "slideUp 1s 1s forwards";
  }, []);

  useEffect(() => {
    setHi("Hi,");
    setName("I'm Marlon Baatjes");
    setProfession("Full Stack Software Engineer");
    setRoles("Web Developer | Front-End Engineer");
  }, []);

  return (
    <article className="home-page page">
      <div className="hero">
        <div className="hero-container">
          <div className="hero_text">
            <AnimateText
              {...{
                textStr: hi,
                index: 0,
                bold: "bold",
              }}
            />
            <AnimateText
              {...{
                textStr: name,
                index: 3,
                bold: "bold",
              }}
            />
            <AnimateText
              {...{
                textStr: profession,
                index: name.length,
                bold: "bold",
              }}
            />
            <AnimateText
              {...{
                textStr: roles,
                index: profession.length + name.length,
                bold: "small",
                onAnimationEnd: handleAnimation,
              }}
            />
          </div>
          <div className="hero_contact">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <svg
        id="front"
        width="400"
        height="400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="50%" y="50%" fontSize="420" textAnchor="middle" dy=".3em">
          M
        </text>
      </svg>
      <svg
        id="back"
        width="400"
        height="400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="50%" y="50%" fontSize="420" textAnchor="middle" dy=".3em">
          M
        </text>
      </svg>
    </article>
  );
}
