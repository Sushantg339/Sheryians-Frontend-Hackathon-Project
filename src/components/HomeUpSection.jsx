import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import DecryptedText from "../React bits components/DecryptedText";
import StarBorder from "../React bits components/StarBorder";
import { useNavigate } from "react-router-dom";
import TiltedCard from "../React bits components/TitledCard";

const HomeUpSection = () => {
  const navigate = useNavigate();
  const homeImgRef = useRef();

  const CTAHandler = () => {
    navigate("/bbmerch");
  };

  useGSAP(() => {
    gsap.from(homeImgRef.current, {
      opacity: 0,
      scale : 0.5,
      rotateY : "90deg",
      duration: 1.2,
      delay: 1,
    });
  });

  return (
    <section className="w-full xl:min-h-[60vh] flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-5 md:px-14 mt-5 md:mt-10 overflow-hidden">
      <div className="w-full md:w-[65%] text-center md:text-left">
        <DecryptedText
          text={`The Official Bhuvan Bam Merchandise`}
          speed={50}
          maxIterations={20}
          characters="abcdefghijklmnopqrstuvwxyz"
          className="revealed text-4xl md:text-5xl lg:text-8xl leading-tight"
          parentClassName="all-letters"
          encryptedClassName="encrypted text-4xl md:text-5xl lg:text-8xl leading-tight overflow-hidden"
          animateOn="view"
          sequential="true"
        />
        <div className="mt-8 flex justify-center md:justify-start">
          <StarBorder
            as="button"
            className="custom-class"
            color="crimson"
            speed="2s"
            thickness={2}
            onClick={CTAHandler}
          >
            See Merchandise
          </StarBorder>
        </div>
      </div>

      <div ref={homeImgRef} className="w-full md:w-[50%] xl:w-[60%] flex justify-center">
        <TiltedCard
  imageSrc="/images/bhvanhome.jpg"
  altText="Bhuvan Bam. The Youth Icon"
  captionText="Bhuvan Bam - BB ki Vines"
  containerHeight="70%"
  containerWidth="60%"
  imageHeight="400px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
/>
      </div>
    </section>
  );
};

export default HomeUpSection;
