"use client";
import React, { useRef } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import img_1 from "../../../public/images/references/cards/img_1.jpeg";
import img_2 from "../../../public/images/references/cards/img_2.jpeg";
import img_3 from "../../../public/images/references/cards/img_3.jpeg";
import img_4 from "../../../public/images/references/cards/img_4.jpeg";
import img_6 from "../../../public/images/references/cards/img_6.jpeg";
import img_7 from "../../../public/images/references/cards/img_7.jpeg";
import Card from "@/components/references/Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const page = () => {
  const ctaData = {
    displays: [
      {
        image: "/images/references/cards/img_1.jpeg",
        title: "RENAULT TRUCKS - Web Série",
        para: "Une série de 7 épisodes où on accompagne Bruno Blin et Pauline Follin sur la remise en cause et la décarbonation de leurs véhicules suite aux nouveaux enjeux du réchauffement climatique.",
        link: "https://www.renault-trucks.com/fr/la-webserie-good-move",
        linkText: "Autres épisodes",
      },
      {
        image: "/images/references/cards/img_2.jpeg",
        title: "LNR x CANAL+ - Finale Top14",
        para: "Teaser de la finale de la principale compétition de rugby en France, regroupant les 14 meilleurs clubs professionnels du pays, diffusée à la télé sur Canal+.",
      },
      {
        image: "/images/references/cards/img_3.jpeg",
        title: "GROUPE SEB - Cookeo Touch Pro",
        para: "Pub du Multicuiseur Moulinex. Il est plus intelligent, plus rapide et rend la cuisine plus facile.",
      },
      {
        image: "/images/references/cards/img_4.jpeg",
        title: "GRAND CHAMBÉRY - Intranet",
        para: " Présentation du réseau informatique interne pour la ville de Chambéry et son CCAS.",
      },
      {
        image: "/images/references/cards/img_6.jpeg",
        title: "BOUYGUES CONSTRUCTION - Film Pionnier",
        para: `Bouygues Bâtiment International démontre ce qu'est "l'esprit pionnier", 24 550 collaborateurs de 80 nationalités différentes répartis dans 26 pays et travaillant sur des centaines de projets depuis 50 ans.`,
      },
      {
        image: "/images/references/cards/img_7.jpeg",
        title: "DELPHARM - Film Collaborateurs",
        para: ` Film promotionnelle sur le quotidien au sein de Delpharm, les
              différents corps de métiers témoignent de l'ambiance et
              l'organisation de l'entreprise.`,
      },
    ],
  };

  const containerRef = useRef(null);
  const ctaCardListRef = useRef(null);

  useGSAP(
    () => {
      const ctaCards = Array.from(ctaCardListRef.current.children);
      const numbers = Array.from(ctaCardListRef.current.children);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${window.innerHeight * (window.innerWidth >= 1024 ? 10 : 5)}`,
          scrub: 1.5,
          pin: true,
          pinSpacing: true,
        },
      });

      tl.set(Array.from(numbers[0].children)[0], {
        color: "#9B36FF",
        fontWeight: 500,
        scale: 1.25,
      }).set(Array.from(numbers[0].children)[1], {
        autoAlpha: 1,
      });

      for (let i = 0; i < ctaCards.length - 1; i++) {
        const ctaCard = gsap.utils.selector(ctaCards[i + 1]);

        tl.to(
          ctaCards[i],
          {
            autoAlpha: 0,
            ease: "power3.out",
            duration: 0.75,
          },
          "+=0.5"
        )
          .to(
            ctaCards[i + 1],
            {
              autoAlpha: 1,
              ease: "power3.in",
              duration: 0.75,
            },
            "<"
          )
          .fromTo(
            ctaCard(".cta-card-image"),
            {
              y: "100vh",
            },
            {
              y: 0,
              ease: "power2.out",
              duration: 1.5,
            },
            "-=1"
          )
          .to(
            Array.from(numbers[i].children)[0],
            {
              color: "#767676",
              fontWeight: 400,
              scale: 1,
            },
            "<"
          )
          .to(
            Array.from(numbers[i].children)[1],
            {
              autoAlpha: 0,
            },
            "<"
          )
          .to(
            Array.from(numbers[i + 1].children)[0],
            {
              color: "#9B36FF",
              fontWeight: 500,
              scale: 1.25,
            },
            "<"
          )
          .to(
            Array.from(numbers[i + 1].children)[1],
            {
              autoAlpha: 1,
            },
            "<"
          )
          .to(ctaCards[i + 1], {
            autoAlpha: 1,
            duration: 0.25,
          });
      }
    },
    {
      scope: containerRef,
    }
  );

  return (
    <Layout>
      <div
        ref={containerRef}
        className="flex min-h-screen w-full flex-col px-[200px] max-xl:px-[100px] max-lg:px-[50px] "
      >
        <ul
          ref={ctaCardListRef}
          className="w-full h-full relative flex place-content-between place-items-center"
        >
          {ctaData.displays.map((display, idx) => (
            <li
              key={display.title + idx}
              className={`w-full h-full absolute ${
                idx > 0 ? "invisible" : "visible"
              }`}
            >
              <Card
                title={display.title}
                para={display.para}
                link={display.link}
                linkText={display.linkText}
                image={display.image}
                alt={idx % 2 !== 0 ? true : false}
              />
            </li>
          ))}
        </ul>
     

      
      </div>
    </Layout>
  );
};

export default page;
