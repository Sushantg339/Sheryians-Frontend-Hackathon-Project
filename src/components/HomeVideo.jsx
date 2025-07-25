import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';
import video from "/videos/website video.mp4"

gsap.registerPlugin(ScrollTrigger);

const HomeVideo = () => {
  const homeVideoRef = useRef(null);

  useGSAP(() => {
    gsap.from(homeVideoRef.current, {
      scale: 0.5,
      scrollTrigger: {
        trigger: homeVideoRef.current,
        scroller: '#main',
        start: 'top 90%',
        end: 'top 50%',
        scrub: 3,
      },
    });
  }, homeVideoRef);

  return (
    <div className="w-full px-2 md:px-5 lg:px-10 mt-5 mb-5">
      <video
        ref={homeVideoRef}
        autoPlay
        loop
        muted
        className="h-[70vh] md:h-[80vh] w-full object-cover object-top rounded-xl shadow-lg"
        src={video}
      ></video>
    </div>
  );
};

export default HomeVideo;
