"use client";
import React, { useRef } from "react";
import Image from "next/image";
import icon_1 from "../../../../public/images/home/cardBg/icon-1.svg";
import icon_2 from "../../../../public/images/home/cardBg/icon-2.svg";
import icon_3 from "../../../../public/images/home/cardBg/icon-3.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Cards = () => {
  const containerRef = useRef();
  const heading_1 = useRef();
  const heading_2 = useRef();
  const heading_3 = useRef();
  const heading_para = useRef();
  const borderline = useRef();
  const para_2 = useRef();
  const card_1 = useRef();
  const card_2 = useRef();
  const card_3 = useRef();

  useGSAP(
    () => {
      const condition = window.innerWidth < 1024;

      if (!condition) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center center",
            end: `+=${
              window.innerHeight * (window.innerWidth >= 1024 ? 2 : 4)
            }`,
            scrub: 1,
            pin: true,

            pinSpacing: true,
          },
        });

        tl.fromTo(
          heading_1.current,
          {
            alpha: 0,
          },
          {
            alpha: 1,
          }
        );
        tl.fromTo(
          heading_2.current,
          {
            alpha: 0,
          },
          {
            alpha: 1,
          }
        );
        tl.fromTo(
          heading_3.current,
          {
            alpha: 0,
          },
          {
            alpha: 1,
          }
        );
        tl.fromTo(
          heading_para.current,
          {
            alpha: 0,
          },
          {
            alpha: 1,
          }
        );
        tl.fromTo(
          borderline.current,
          {
            alpha: 0,
          },
          {
            alpha: 1,
          },
          "<"
        );
        tl.fromTo(
          para_2.current,
          {
            alpha: 0,
          },
          {
            alpha: 1,
          }
        );
        // card
        tl.fromTo(
          card_1.current,
          {
            top: "100px",
            alpha: 0,
          },
          {
            top: "0px",
            alpha: 1,
          }
        );
        tl.fromTo(
          card_2.current,
          {
            top: "100px",
            alpha: 0,
          },
          {
            top: "0px",
            alpha: 1,
          }
        );
        tl.fromTo(
          card_3.current,
          {
            top: "100px",
            alpha: 0,
          },
          {
            top: "0px",
            alpha: 1,
          }
        );
      } else {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: `90% 80%`,
            scrub: 1,
          },
        });
        tl.fromTo(
          heading_1.current,
          {
            alpha: 0,
          },
          {
            alpha: 1,
          }
        );
        tl.fromTo(
          heading_2.current,
          {
            alpha: 0,
          },
          {
            alpha: 1,
          },
          "<"
        );
        tl.fromTo(
          heading_3.current,
          {
            alpha: 0,
          },
          {
            alpha: 1,
          },
          "<"
        );
        tl.fromTo(
          heading_para.current,
          {
            alpha: 0,
          },
          {
            alpha: 1,
          },
          "<"
        );
        tl.fromTo(
          borderline.current,
          {
            alpha: 0,
          },
          {
            alpha: 1,
          },
          "<"
        );
        tl.fromTo(
          para_2.current,
          {
            alpha: 0,
          },
          {
            alpha: 1,
          },
          "<"
        );
        // card
        tl.fromTo(
          card_1.current,
          {
            left: "-100px",
            alpha: 0,
          },
          {
            left: "0px",
            alpha: 1,
          }
        );
        tl.fromTo(
          card_2.current,
          {
            left: "-100px",
            alpha: 0,
          },
          {
            left: "0px",
            alpha: 1,
          }
        );
        tl.fromTo(
          card_3.current,
          {
            left: "-100px",
            alpha: 0,
          },
          {
            left: "0px",
            alpha: 1,
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen items-center justify-center flex flex-col"
    >
      <div className="px-[200px] max-xl:px-[100px] max-lg:px-[50px]  w-full py-[50px] gap-[20px] flex  justify-center flex-col items-center min-h-[200px]">
        <h1 className=" text-[clamp(25px,3vw,50px)] raleway text-center text-white">
          {" "}
          <span ref={heading_1}> MONTEUR </span>{" "}
          <span ref={heading_2}> VIDÉO </span>{" "}
          <span ref={heading_3}> FREELANCE </span>
        </h1>
        <p
          ref={heading_para}
          className=" text-[clamp(16px,2vw,20px)] raleway text-center text-white"
        >
          dédié à donner vie à vos projets avec précision et passion
        </p>
        <div
          ref={borderline}
          className="w-[300px] mt-[30px] h-[10px] rounded-[20px]  flex justify-center items-center bg-white"
        />
        <h3
          ref={para_2}
          className="text-white mt-[30px] raleway text-center text-[clamp(25px,3vw,30px)]"
        >
          POURQUOI MOI ?
        </h3>

        <div className="w-full flex max-lg:flex-col mt-[50px]  justify-center gap-[40px]">
          <div
            ref={card_1}
            className=' relative  group max-lg:w-full hover:scale-[110%] ease-in-out  duration-[0.8s]   overflow-hidden bg-cover bg-center bg-[url("/images/home/cardBg/card-1.png")]  grayscale w-[400px]   h-[300px]'
          >
            <div className="absolute group-hover:hidden flex   top-0 gap-[20px]  justify-center items-center flex-col left-0 w-full h-full bg-white/80">
              <Image
                src={icon_1}
                className="w-[70px]  h-auto"
                alt="flexible_icon"
                width={500}
                height={500}
              />
              <h2 className=" text-[clamp(23px,2vw,29px)] raleway  ">FLEXIBLE</h2>
            </div>
            <div className="absolute  group-hover:flex hidden top-0 py-[30px] items-center justify-center gap-[10px] px-[20px] text-center bg-white/80  left-0  flex-col w-full h-full">
              <h3 className=" text-[clamp(23px,2vw,27px)] raleway border-b-2 border-black py-[10px]">
                Distanciel et présentiel
              </h3>

              <p className="text-[clamp(10px,2vw,12px)] raleway mt-[15px]">
                Équipé d'un banc de montage, je peux travailler en distanciel
                avec des collaborateurs de toute part.
              </p>
              <p className="text-[clamp(10px,2vw,12px)] raleway">
                Selon les préférences je suis aussi disponible en présentiel,
                basé sur Lyon je peux me déplacer facilement aux alentours, mais
                aussi dans le reste de la France selon les projets.
              </p>
              <p className="text-[clamp(10px,2vw,12px)] raleway">
                Je suis donc à proximité de mes clients partout dans le monde.
              </p>
            </div>
          </div>
          <div
            ref={card_2}
            className=' relative group max-lg:w-full hover:scale-[110%] ease-in-out  duration-[0.8s]   overflow-hidden bg-cover bg-center bg-[url("/images/home/cardBg/card-2.png")]  grayscale w-[400px]   h-[300px]'
          >
            <div className="absolute group-hover:hidden flex   top-0 gap-[20px]  justify-center items-center flex-col left-0 w-full h-full bg-white/80">
              <Image
                src={icon_2}
                className="w-[70px]  h-auto"
                alt="flexible_icon"
                width={500}
                height={500}
              />
              <h2 className="text-[clamp(23px,2vw,29px)] raleway "> EXPERT </h2>
            </div>
            <div className="absolute  group-hover:flex hidden top-0 py-[30px] items-center justify-center gap-[10px] px-[20px] text-center bg-white/80  left-0  flex-col w-full h-full">
              <h3 className="text-[clamp(23px,2vw,27px)]  raleway border-b-2 border-black py-[10px]">
                Formats Corporate / Pub
              </h3>

              <p className="text-[clamp(10px,2vw,12px)] raleway mt-[15px]">
                Spécialisé dans les vidéos Corporate, Pub et Promotionnelles,
                j'ai déjà travaillé pour de nombreux clients.
              </p>
              <p className="text-[clamp(10px,2vw,12px)] raleway">
                Que vous ayez besoin d'une vidéo d'entreprise percutante ou
                d'une publicité accrocheuse, je me consacre à créer les vidéos
                qui captivent votre audience cible.
              </p>
              <p className="text-[clamp(10px,2vw,12px)] raleway">
                Ce sont les formats les plus adaptés à mes qualités : organisé,
                assidu, appliqué, rigoureux et critique.
              </p>
            </div>
          </div>
          <div
            ref={card_3}
            className=' relative group  max-lg:w-full hover:scale-[110%] ease-in-out  duration-[0.8s]   overflow-hidden bg-cover bg-center bg-[url("/images/home/cardBg/card-3.png")]  grayscale w-[400px]   h-[300px]'
          >
            <div className="absolute group-hover:hidden flex   top-0 gap-[20px]  justify-center items-center flex-col left-0 w-full h-full bg-white/80">
              <Image
                src={icon_3}
                className="w-[70px]  h-auto"
                alt="flexible_icon"
                width={500}
                height={500}
              />
              <h2 className="text-[clamp(23px,2vw,29px)] raleway  ">COLLABORATIONS</h2>
            </div>
            <div className="absolute  group-hover:flex hidden top-0 py-[30px] items-center justify-center gap-[10px] px-[20px] text-center bg-white/80  left-0  flex-col w-full h-full">
              <h3 className="text-[clamp(23px,2vw,27px)] raleway border-b-2 border-black py-[10px]">
                Agences / Entreprises
              </h3>

              <p className="text-[clamp(10px,2vw,12px)] raleway mt-[15px]">
                Je travaille principalement avec des agences de communication,
                des boîtes de production et des entreprises de divers secteurs.
              </p>
              <p className="text-[clamp(10px,2vw,12px)] raleway ">
                Mon travail étroit avec des chefs de projet, des directeurs
                créatifs et des équipes de production me permet de comprendre
                les enjeux et les attentes des professionnels du secteur et
                d'assurer le développement de chaque projet.
              </p>
              <p className="text-[clamp(10px,2vw,12px)]">
                Je reste cependant ouvert aux particuliers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
