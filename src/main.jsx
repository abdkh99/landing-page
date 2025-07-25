import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GsapScrollAnimations() {
  useEffect(() => {
    // WhyUS Section: Slide from left + Fade
    const whyus = document.querySelector(".WhyUS");
    if (whyus) {
      gsap.fromTo(
        whyus,
        { opacity: 0, x: -120 },
        {
          opacity: 1,
          x: 0,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whyus,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Step Section: Staggered Slide up for each .box
    const step = document.querySelector(".Step");
    if (step) {
      const boxes = step.querySelectorAll(".box");
      gsap.fromTo(
        boxes,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.18,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Ourmission Section: Fade + Rotate
    const mission = document.querySelector(".Ourmission");
    if (mission) {
      gsap.fromTo(
        mission,
        { opacity: 0, rotate: -4, y: 60 },
        {
          opacity: 1,
          rotate: 0,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mission,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Footer: Fade from bottom + Scale
    const footer = document.querySelector(".Footer");
    if (footer) {
      gsap.fromTo(
        footer,
        { opacity: 0, y: 60, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);
  return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GsapScrollAnimations />
    <App />
  </BrowserRouter>
);
