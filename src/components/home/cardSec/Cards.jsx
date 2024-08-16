import React from "react";
import Image from "next/image";
import icon_1 from "../../../../public/images/home/cardBg/icon-1.svg";
import icon_2 from "../../../../public/images/home/cardBg/icon-2.svg";
import icon_3 from "../../../../public/images/home/cardBg/icon-3.svg";

const Cards = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="px-[200px] w-full py-[50px] gap-[20px] flex  justify-center flex-col items-center min-h-[200px]">
        <h1 className="text-[50px] text-white">MONTEUR VIDÉO FREELANCE</h1>
        <p className="text-[19px] text-white">
          dédié à donner vie à vos projets avec précision et passion
        </p>
        <div className="w-[300px] mt-[30px] h-[10px] rounded-[20px]  flex justify-center items-center bg-white" />
        <h3 className="text-white mt-[30px] text-[30px]">POURQUOI MOI ?</h3>

        <div className="w-full flex mt-[50px]  justify-center gap-[40px]">
          <div className=' relative group hover:scale-[110%] ease-in-out  duration-[0.8s]   overflow-hidden bg-cover bg-center bg-[url("/images/home/cardBg/card-1.png")]  grayscale w-[400px]   h-[300px]'>
            <div className="absolute group-hover:hidden flex   top-0 gap-[20px]  justify-center items-center flex-col left-0 w-full h-full bg-white/80">
              <Image
                src={icon_1}
                className="w-[70px]  h-auto"
                alt="flexible_icon"
                width={500}
                height={500}
              />
              <h2 className="text-[29px]  ">FLEXIBLE</h2>
            </div>
            <div className="absolute  group-hover:flex hidden top-0 py-[30px] items-center justify-center gap-[10px] px-[20px] text-center bg-white/80  left-0  flex-col w-full h-full">
              <h3 className="text-[27px] border-b-2 border-black py-[10px]">
                Distanciel et présentiel
              </h3>

              <p className="text-[12px] mt-[15px]">
                Équipé d'un banc de montage, je peux travailler en distanciel
                avec des collaborateurs de toute part.
              </p>
              <p className="text-[12px]">
                Selon les préférences je suis aussi disponible en présentiel,
                basé sur Lyon je peux me déplacer facilement aux alentours, mais
                aussi dans le reste de la France selon les projets.
              </p>
              <p className="text-[12px]">
                Je suis donc à proximité de mes clients partout dans le monde.
              </p>
            </div>
          </div>
          <div className=' relative group hover:scale-[110%] ease-in-out  duration-[0.8s]   overflow-hidden bg-cover bg-center bg-[url("/images/home/cardBg/card-2.png")]  grayscale w-[400px]   h-[300px]'>
            <div className="absolute group-hover:hidden flex   top-0 gap-[20px]  justify-center items-center flex-col left-0 w-full h-full bg-white/80">
              <Image
                src={icon_2}
                className="w-[70px]  h-auto"
                alt="flexible_icon"
                width={500}
                height={500}
              />
              <h2 className="text-[29px]  "> EXPERT </h2>
            </div>
            <div className="absolute  group-hover:flex hidden top-0 py-[30px] items-center justify-center gap-[10px] px-[20px] text-center bg-white/80  left-0  flex-col w-full h-full">
              <h3 className="text-[27px] border-b-2 border-black py-[10px]">
                Formats Corporate / Pub
              </h3>

              <p className="text-[12px] mt-[15px]">
                Spécialisé dans les vidéos Corporate, Pub et Promotionnelles,
                j'ai déjà travaillé pour de nombreux clients.
              </p>
              <p className="text-[12px]">
                Que vous ayez besoin d'une vidéo d'entreprise percutante ou
                d'une publicité accrocheuse, je me consacre à créer les vidéos
                qui captivent votre audience cible.
              </p>
              <p className="text-[12px]">
                Ce sont les formats les plus adaptés à mes qualités : organisé,
                assidu, appliqué, rigoureux et critique.
              </p>
            </div>
          </div>
          <div className=' relative group  hover:scale-[110%] ease-in-out  duration-[0.8s]   overflow-hidden bg-cover bg-center bg-[url("/images/home/cardBg/card-3.png")]  grayscale w-[400px]   h-[300px]'>
            <div className="absolute group-hover:hidden flex   top-0 gap-[20px]  justify-center items-center flex-col left-0 w-full h-full bg-white/80">
              <Image
                src={icon_3}
                className="w-[70px]  h-auto"
                alt="flexible_icon"
                width={500}
                height={500}
              />
              <h2 className="text-[29px]  ">COLLABORATIONS</h2>
            </div>
            <div className="absolute  group-hover:flex hidden top-0 py-[30px] items-center justify-center gap-[10px] px-[20px] text-center bg-white/80  left-0  flex-col w-full h-full">
              <h3 className="text-[27px] border-b-2 border-black py-[10px]">
                Agences / Entreprises
              </h3>

              <p className="text-[12px] mt-[15px]">
                Je travaille principalement avec des agences de communication,
                des boîtes de production et des entreprises de divers secteurs.
              </p>
              <p className="text-[12px]">
                Mon travail étroit avec des chefs de projet, des directeurs
                créatifs et des équipes de production me permet de comprendre
                les enjeux et les attentes des professionnels du secteur et
                d'assurer le développement de chaque projet.
              </p>
              <p className="text-[12px]">
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
