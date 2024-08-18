import React from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import img_1 from "../../../public/images/references/cards/img_1.jpeg";
import img_2 from "../../../public/images/references/cards/img_2.jpeg";
import img_3 from "../../../public/images/references/cards/img_3.jpeg";
import img_4 from "../../../public/images/references/cards/img_4.jpeg";
import img_6 from "../../../public/images/references/cards/img_6.jpeg";
import img_7 from "../../../public/images/references/cards/img_7.jpeg";

const page = () => {
  return (
    <Layout>
      <div className="flex min-h-screen w-full flex-col px-[200px] max-xl:px-[100px] max-lg:px-[50px] ">
        {/* card_1 */}
        <div className="w-full h-screen flex items-center justify-between">
          <div className="text-white flex flex-col gap-[30px] justify-center  items-center w-1/2 text-[20px]">
            <h1 className="text-center text-[40px] ">
              RENAULT TRUCKS - Web Série
            </h1>
            <p className="text-center text-[18px] w-[80%] ">
              Une série de 7 épisodes où on accompagne Bruno Blin et Pauline
              Follin sur la remise en cause et la décarbonation de leurs
              véhicules suite aux nouveaux enjeux du réchauffement climatique.
            </p>
            <p className="text-center text-[24px]">Autres épisodes</p>
          </div>
          <div className="text-white w-1/2 text-[20px]">
            <Image
              src={img_1}
              alt="RENAULT TRUCKS - Web Série"
              className="w-full h-auto"
              title="RENAULT TRUCKS - Web Série"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* card_2  */}
        <div className="w-full h-screen flex items-center justify-between">
          <div className="text-white w-1/2 text-[20px]">
            <Image
              src={img_2}
              alt="RENAULT TRUCKS - Web Série"
              className="w-full h-auto"
              title="RENAULT TRUCKS - Web Série"
              width={500}
              height={500}
            />
          </div>
          <div className="text-white flex flex-col gap-[30px] justify-center  items-center w-1/2 text-[20px]">
            <h1 className="text-center text-[40px] ">
              LNR x CANAL+ - Finale Top14
            </h1>
            <p className="text-center text-[18px] w-[80%] ">
              Teaser de la finale de la principale compétition de rugby en
              France, regroupant les 14 meilleurs clubs professionnels du pays,
              diffusée à la télé sur Canal+.
            </p>
          </div>
        </div>

        {/* card_3 */}
        <div className="w-full h-screen flex items-center justify-between">
          <div className="text-white flex flex-col gap-[30px] justify-center  items-center w-1/2 text-[20px]">
            <h1 className="text-center text-[40px] ">
              GROUPE SEB - Cookeo Touch Pro
            </h1>
            <p className="text-center text-[18px] w-[80%] ">
              Pub du Multicuiseur Moulinex. Il est plus intelligent, plus rapide
              et rend la cuisine plus facile.
            </p>
          </div>
          <div className="text-white w-1/2 text-[20px]">
            <Image
              src={img_3}
              alt="RENAULT TRUCKS - Web Série"
              className="w-full h-auto"
              title="RENAULT TRUCKS - Web Série"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* card_4 */}
        <div className="w-full h-screen flex items-center justify-between">
          
          <div className="text-white w-1/2 text-[20px]">
            <Image
              src={img_4}
              alt="RENAULT TRUCKS - Web Série"
              className="w-full h-auto"
              title="RENAULT TRUCKS - Web Série"
              width={500}
              height={500}
            />
          </div>
          <div className="text-white flex flex-col gap-[30px] justify-center  items-center w-1/2 text-[20px]">
            <h1 className="text-center text-[40px] ">
              GRAND CHAMBÉRY - Intranet
            </h1>
            <p className="text-center text-[18px] w-[80%] ">
              Présentation du réseau informatique interne pour la ville de
              Chambéry et son CCAS.
            </p>
          </div>
        </div>

        {/* card_5 */}
        <div className="w-full h-screen flex items-center justify-between">
          <div className="text-white flex flex-col gap-[30px] justify-center  items-center w-1/2 text-[20px]">
            <h1 className="text-center text-[40px] ">
              BOUYGUES CONSTRUCTION - Film Pionnier
            </h1>
            <p className="text-center text-[18px] w-[80%] ">
              Bouygues Bâtiment International démontre ce qu'est "l'esprit
              pionnier", 24 550 collaborateurs de 80 nationalités différentes
              répartis dans 26 pays et travaillant sur des centaines de projets
              depuis 50 ans.
            </p>
          </div>
          <div className="text-white w-1/2 text-[20px]">
            <Image
              src={img_6}
              alt="RENAULT TRUCKS - Web Série"
              className="w-full h-auto"
              title="RENAULT TRUCKS - Web Série"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* card_6 */}
        <div className="w-full h-screen flex items-center justify-between">
         
          <div className="text-white w-1/2 text-[20px]">
            <Image
              src={img_7}
              alt="RENAULT TRUCKS - Web Série"
              className="w-full h-auto"
              title="RENAULT TRUCKS - Web Série"
              width={500}
              height={500}
            />
          </div>
          <div className="text-white flex flex-col gap-[30px] justify-center  items-center w-1/2 text-[20px]">
            <h1 className="text-center text-[40px] ">
              DELPHARM - Film Collaborateurs
            </h1>
            <p className="text-center text-[18px] w-[80%] ">
              Film promotionnelle sur le quotidien au sein de Delpharm, les
              différents corps de métiers témoignent de l'ambiance et
              l'organisation de l'entreprise.
            </p>
          </div>
        </div>

      
      </div>
    </Layout>
  );
};

export default page;
