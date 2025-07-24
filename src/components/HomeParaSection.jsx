import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const HomeParaSection = () => {
  const h1Ref = useRef();
  const pref = useRef();

  useEffect(() => {
    let h1Text = h1Ref.current.textContent.split('');
    let clutter1 = '';
    h1Text.forEach((element) => {
      clutter1 += `<span class="letter">${element}</span>`;
    });
    h1Ref.current.innerHTML = clutter1;

    let pText = pref.current.textContent.split('');
    let clutter = '';
    pText.forEach((element) => {
      clutter += `<span class="pletter">${element}</span>`;
    });
    pref.current.innerHTML = clutter;

    gsap.from('.letter', {
      x: -200,
      opacity: 0,
      stagger: 0.3,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.letter',
        scroller: '#main',
        scrub: 3,
        start: 'top 80%',
        end: 'top 60%',
      },
    });

    gsap.to('.pletter', {
      color: '#111',
      stagger: 0.1,
      duration: 0.8,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.pletter',
        scroller: '#main',
        scrub: 3,
        start: 'top 75%',
        end: 'top 30%',
      },
    });
  }, []);

  return (
    <section className="text-center mt-10 mb-10 font-[dott] mx-auto px-4 md:px-10">
      <h1
        ref={h1Ref}
        className="text-4xl md:text-6xl lg:text-8xl mb-6 text-amber-800 leading-tight"
      >
        The Origin of Youthiapa
      </h1>
      <p
        ref={pref}
        className="text-base sm:text-lg/10 md:text-xl/10 lg:text-3xl/15 leading-8 text-zinc-400 w-full md:w-[90%] lg:w-[80%] mx-auto"
      >
        What started in a small room with a camera and boundless creativity turned into a movement. Youthiapa isn’t just a brand—it's Bhuvan Bam’s voice, raw and unfiltered. Fueled by humor, hustle, and heart, it speaks for every youth who dares to be real. We don’t chase trends—we set them. This is streetwear with a soul. This is unapologetically you.
      </p>
    </section>
  );
};

export default HomeParaSection;
