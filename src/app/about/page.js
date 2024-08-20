"use client"
import React , {useRef} from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import user from '../../../public/images/about/person.png'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const page = () => {
  const containerRef = useRef();
  const imageRef = useRef()
  useGSAP(()=>{
    gsap.timeline().fromTo(imageRef.current , {alpha : 0} , {alpha : 1} , '1s')
  },{scope : containerRef})

  return (
    <Layout>
      <div className="w-full relative min-h-screen px-[200px] max-xl:px-[100px] max-lg:px-[50px] pt-[200px] flex  text-white  flex-col justify-center items-center">
        <h1 className="text-center z-10 text-[clamp(25px,3vw,50px)]  " >Découvrez mon univers !</h1>
        <p className="text-center z-10 text-[clamp(14px,3vw,22px)]" >
          Moi c'est Alexandre et je suis monteur vidéo, mais avant tout un
          passionné de création de contenus visuels.
        </p>
        <p className="text-center z-10 text-[clamp(14px,3vw,22px)] mt-3" >
          Depuis plus de cinq ans j'ai bâti de l'expérience qui aujourd'hui me
          permet de vivre de ma passion. J'ai commencé comme bénévole en
          parallèle de ma licence de technicien monteur, puis après mon stage et
          l'obtention de mon diplôme, je me suis lancé en freelance.
        </p>
        <p className="text-center z-10 text-[clamp(14px,3vw,22px)] mt-3" >
          Ce que j'aime le plus dans mon métier c'est la magie de transformer
          une idée en une création concrète. J'ai la chance de collaborer avec
          différentes agences qui me permettent d'apprendre chaque jour.
        </p>

        <p className="text-center z-10 text-[clamp(14px,3vw,22px)] mt-3" >
          Je m'engage à vous offrir un service sur-mesure alliant flexibilité,
          créativité et rigueur technique. Travailler avec moi, c'est choisir
          une collaboration basée sur la confiance, la fidélité, une
          communication ouverte et une passion commune pour l'excellence.
        </p>

        <p className="text-center z-10 text-[clamp(14px,3vw,22px)] mt-3" >
          Chaque vidéo est une histoire à raconter et j'ai hâte de vous aider à
          raconter la vôtre. Ensemble, donnons vie à vos projets les plus
          ambitieux.
        </p>

        <div ref={imageRef} className="absolute opacity-0 w-full  h-fit  top-[80px] flex justify-end px-[100px] max-xl:top-[50px] max-xl:px-[0px]    right-[0px]" >
          <Image src={user} className = {'w-[600px] max-lg:w-[500px] max-md:w-[350px] h-auto'} width={500} height={500} alt="ALEXANDRE CARTILLIER" title="ALEXANDRE CARTILLIER"  />
        </div>
      </div>
    </Layout>
  );
};

export default page;
