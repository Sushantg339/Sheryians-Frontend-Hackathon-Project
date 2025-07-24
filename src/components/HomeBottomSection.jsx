import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeBottomSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller : '#main',
          start: "top 80%",
            end:"top 50%",
            scrub : 3,
        },
      });

      gsap.from(textRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller : '#main',
          start: "top 80%",
            end:"top 50%",
            scrub : 3,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <section
      ref={sectionRef}
      className="w-full text-black py-16 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div ref={imageRef} className="flex justify-center">
          <img
            src="/images/characters.png"
            alt="Bhuvan Bam"
            className="rounded-xl shadow-lg max-w-[60%] md:max-w-[300px] object-cover"
          />
        </div>

        <div ref={textRef} className="flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            From a <span className="text-red-400">phone camera</span> to millions of hearts.
          </h2>

          <p className="text-xl text-gray-500">
            The journey began in a single room. No lights, no setup — just a passion to make people laugh. What came next was history.
          </p>

          <p className="text-base text-gray-700 italic">
            “Bhuvan didn’t chase trends. He created his own.”
          </p>

        <button
            onClick={handleNavigate}
            className="w-fit bg-black cursor-pointer self-center md:self-start text-gray-300 font-semibold px-6 py-3 hover:scale-105 hover:text-white rounded-full hover:bg-zinc-800 transition-all duration-400"
            >
            Explore His Story →
        </button>

        </div>
      </div>
    </section>
  );
};

export default HomeBottomSection;
