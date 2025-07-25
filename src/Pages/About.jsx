import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "From Rags",
    z: 1,
    text: `Bhuvan Bam’s journey started in the small cafes of Delhi where he played music for a handful of people. With no background in film or media, and using just his phone camera, he began experimenting with short skits and songs. No studio, no team — only raw passion, creativity, and a burning desire to create something meaningful.`,
    img: "/images/bhvanhome-Photoroom.png",
  },
  {
    title: "To Riches",
    z: 2,
    text: `From uploading videos in his bedroom to becoming a nationwide sensation, Bhuvan's rise was phenomenal. With over 25 million subscribers on YouTube, a successful music career, and brand collaborations, he turned his hustle into a thriving business. His story is not just about success — it’s about building an empire from scratch with consistency and love for the craft.`,
    images: [
      "/images/riches1.jpg",
      "/images/riches2.jpg",
      "/images/riches3.jpg",
      "/images/riches4.jpg",
    ],
  },
  {
    title: "From Unknown",
    z: 3,
    text: `There was a time when nobody knew who Bhuvan Bam was. He created characters like Banchoddas, Sameer Fuddi, and Titu Mama, playing them all himself — with no camera crew or external help. His videos went viral not because of budget, but because of relatability and originality.`,
    images: [
      "/images/unknown1.jpg",
      "/images/unknown2.jpg",
      "/images/unknown3.jpg",
      "/images/unknown4.jpg",
    ],
  },
  {
    title: "To The Most Popular Influencer",
    z: 4,
    text: `Today, Bhuvan Bam is one of India’s most celebrated digital creators. He has performed globally, launched his own music videos, started a successful merchandise line (Youthiapa), and even starred in a web series. His content is watched not just in India, but across the world — a true example of how digital power can shape stardom.`,
    images: [
      "/images/popular1.jpg",
      "/images/popular2.jpg",
      "/images/popular3.jpg",
      "/images/popular4.jpg",
    ],
  },
];

const About = () => {
  useEffect(() => {
  const totalParas = 4;

  for (let i = 1; i <= totalParas; i++) {
    const pTag = document.querySelector(`.animated-para-${i}`);
    if (!pTag) continue;

    const text = pTag.textContent;
    let clutter = "";

    text.split("").forEach((char) => {
      clutter += `<span class="pletter plet-${i}">${char}</span>`;
    });

    pTag.innerHTML = clutter;

    gsap.to(`.plet-${i}`, {
      color: "#111",
      stagger: 0.05,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: pTag,
        scroller: "#main",
        scrub: 3,
        start: "top 65%",
        end: "top 20%",
      },
    });
  }
}, []);


  return (
    <div className="min-h-screen flex flex-col  bg-zinc-300 py-10">
      <h1 className="text-4xl sticky top-40 z-0 font-bold text-center mb-20 text-yellow-600">
        Bhuvan Bam: Journey That Inspires
      </h1>

      {/* Section 1 - From Rags */}
      <div
        style={{ zIndex: 1 }}
        className="flex justify-between h-[150vh] bg-zinc-200 shadow-md mx-4 lg:mx-20"
      >
        <div className="w-[30%] flex-col gap-10 sticky top-24 h-fit flex justify-center items-center p-4">
          <h1 className="sm:text-xl md:text-2xl lg:text-5xl font-bold text-gray-500 text-center">
            From Rags
          </h1>
          <img
            className="h-[45vh] w-[20vw] object-contain "
            src="/images/rags.png"
            alt="From Rags"
          />
        </div>
        <div className="w-[65%] flex flex-col gap-8 items-center justify-center px-4 py-6">
          <p
            
            className="lg:text-3xl/14 text-lg text-gray-300 text-center max-w-xl animated-para-1"
          >
            Bhuvan Bam’s journey started in the small cafes of Delhi where he
            played music for a handful of people. With no background in film or
            media, and using just his phone camera, he began experimenting with
            short skits and songs. No studio, no team — only raw passion,
            creativity, and a burning desire to create something meaningful.
          </p>
        </div>
      </div>

      {/* Section 2 - To Riches */}
      <div
        style={{ zIndex: 2 }}
        className="flex justify-between h-[150vh] bg-zinc-200 shadow-md mx-4 lg:mx-20"
      >
        <div className="w-[30%] flex-col gap-10 sticky top-24 h-fit flex justify-center items-center p-4">
          <h1 className="sm:text-xl md:text-2xl lg:text-5xl font-bold text-gray-500 text-center">
            To Riches
          </h1>
          <img
            className="h-[45vh] w-[20vw] object-contain"
            src="/images/riches.jpg"
            alt="To Riches"
          />
        </div>
        <div className="w-[65%] flex flex-col gap-8 items-center justify-center px-4 py-6">
          <p
            
            className="lg:text-3xl/14 text-lg text-gray-300 text-center max-w-xl animated-para-2"
          >
            From uploading videos in his bedroom to becoming a nationwide
            sensation, Bhuvan's rise was phenomenal. With over 25 million
            subscribers on YouTube, a successful music career, and brand
            collaborations, he turned his hustle into a thriving business. His
            story is not just about success — it’s about building an empire from
            scratch with consistency and love for the craft.
          </p>
        </div>
      </div>

      {/* Section 3 - From Unknown */}
      <div
        style={{ zIndex: 3 }}
        className="flex justify-between h-[150vh] bg-zinc-200 shadow-md mx-4 lg:mx-20"
      >
        <div className="w-[30%] flex-col gap-10 sticky top-24 h-fit flex justify-center items-center p-4">
          <h1 className="sm:text-xl md:text-2xl lg:text-5xl font-bold text-gray-500 text-center">
            From Unknown
          </h1>
          <img
            className="h-[45vh] w-[20vw] object-contain"
            src="/images/unknown.png"
            alt="From Unknown"
          />
        </div>
        <div className="w-[65%] flex flex-col gap-8 items-center justify-center px-4 py-6">
          <p
            
            className="lg:text-3xl/14 text-lg text-gray-300 text-center max-w-xl animated-para-3"
          >
            There was a time when nobody knew who Bhuvan Bam was. He created
            characters like Banchoddas, Sameer Fuddi, and Titu Mama, playing
            them all himself — with no camera crew or external help. His videos
            went viral not because of budget, but because of relatability and
            originality.
          </p>
        </div>
      </div>

      {/* Section 4 - To The Most Popular Influencer */}
      <div
        style={{ zIndex: 4 }}
        className="flex justify-between h-[150vh] bg-zinc-200 shadow-md mx-4 lg:mx-20"
      >
        <div className="w-[30%] flex-col gap-10 sticky top-24 h-fit flex justify-center items-center p-4">
          <h1 className="sm:text-xl md:text-2xl lg:text-5xl font-bold text-gray-500 text-center">
            To The Most Popular Influencer
          </h1>
          <img
            className="h-[45vh] w-[20vw] object-contain"
            src="/images/popular.jpg"
            alt="To The Most Popular Influencer"
          />
        </div>
        <div className="w-[65%] flex flex-col gap-8 items-center justify-center px-4 py-6">
          <p
            className="lg:text-3xl/14 text-lg text-gray-300 text-center max-w-xl animated-para-4"
          >
            Today, Bhuvan Bam is one of India’s most celebrated digital
            creators. He has performed globally, launched his own music videos,
            started a successful merchandise line (Youthiapa), and even starred
            in a web series. His content is watched not just in India, but
            across the world — a true example of how digital power can shape
            stardom.
          </p>
        </div>
      </div>
      <h1 className="text-4xl mt-10 z-0 font-bold text-center  text-yellow-600">A journey that motivates you to do the unthinkable.</h1>
    </div>
  );
};

export default About;
