"use client"
import React , { useRef } from 'react'
import Image from "next/image";
import icon_1 from "../../../public/images/services/icon/icon_1.svg";
import icon_2 from "../../../public/images/services/icon/icon_2.svg";
import icon_3 from "../../../public/images/services/icon/icon_3.svg";
import icon_4 from "../../../public/images/services/icon/icon_4.svg";
import icon_5 from "../../../public/images/services/icon/icon_5.svg";
import icon_6 from "../../../public/images/services/icon/icon_6.svg";
import icon_7 from "../../../public/images/services/icon/icon_7.svg";


import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const CardSec = () => {
    const containerRef = useRef()

    useGSAP(()=>{

    },{scope : containerRef })


  return (
    <div ref={containerRef} className="px-[200px] max-xl:px-[100px] py-[50px] flex justify-center items-center max-lg:px-[50px] w-full min-h-screen bg-white">
        <div className="w-full min-h-fit flex gap-[50px] justify-center flex-wrap">
         
         
         
          {/* card 1  */}
          <div className="w-[315px]  justify-start items-center h-[330px]   flex flex-col gap-[20px] ">
            <div className="text-center">
              <Image
                src={icon_1}
                className="w-[80px] grayscale h-auto"
                alt="Montage"
                title="Montage"
              />
            </div>
            <div>
              <h1 className="text-[25px]"> MONTAGE </h1>
            </div>
            <div>
              <p className="text-[14px] text-center">
                {" "}
                Chaque détail est travaillé pour créer une narration fluide et
                captivante. Ça comprends le dérushage, l'assemblage, le rythme,
                les transitions... S'adapter aux contraintes de l'équipe, aux
                méthodes de tournage et à toute sorte de format. Le montage est
                adapté selon le publique ciblé et les supports de diffusions.
              </p>
            </div>
          </div>

          {/* card 2 */}

          <div className="w-[315px]  justify-start items-center h-[330px]   flex flex-col gap-[20px] ">
            <div className="text-center">
              <Image
                src={icon_2}
                className="w-[80px] grayscale h-auto"
                alt="MIXAGE / SFX"
                title="MIXAGE / SFX"
              />
            </div>
            <div>
              <h1 className="text-[25px]"> MIXAGE / SFX </h1>
            </div>
            <div>
              <p className="text-[14px] text-center">
                Créer une expérience auditive immersive et de haute qualité.
                Avec le nettoyage des pistes, la synchronisation, l'équilibre
                des différentes pistes audio, le contrôle de la dynamique, les
                transitions sonores et l'ajout d'effets assurant ainsi une
                écoute confortable et captivante pour l'audience.
              </p>
            </div>
          </div>

          {/* card 3 */}

          <div className="w-[315px]  justify-start items-center h-[330px]   flex flex-col gap-[20px] ">
            <div className="text-center">
              <Image
                src={icon_3}
                className="w-[80px] grayscale h-auto"
                alt="Montage"
                title="Montage"
              />
            </div>
            <div>
              <h1 className="text-[25px]"> ÉTALONNAGE </h1>
            </div>
            <div>
              <p className="text-[14px] text-center">
                Optimiser et harmoniser la luminance et la chrominance pour une
                esthétique cohérente et professionnelle. Gérer les espaces
                colorimétriques, l'application des LUTs appropriées ou le
                traitement des fichiers RAW, mais aussi le monitoring sur des
                écrans calibrés pour garantir des couleurs fidèles.
              </p>
            </div>
          </div>

          {/* card 4 */}

          <div className="w-[315px]  justify-start items-center h-[330px]   flex flex-col gap-[20px] ">
            <div className="text-center">
              <Image
                src={icon_4}
                className="w-[80px] grayscale h-auto"
                alt="Montage"
                title="Montage"
              />
            </div>
            <div>
              <h1 className="text-[25px]"> EFFETS / VFX </h1>
            </div>
            <div>
              <p className="text-[14px] text-center">
                Ajouter des éléments numériques pour créer des séquences
                impressionnantes ou des détails uniques. L'incrustation
                d'images, la suppression d'objets indésirables, le tracking et
                les masques font partie des techniques incontournables. Les
                progrès technologiques permettent chaque jour de de nouvelles
                possibilités.
              </p>
            </div>
          </div>

          {/* card 5 */}

          <div className="w-[315px]  justify-start items-center h-[330px]   flex flex-col gap-[20px] ">
            <div className="text-center">
              <Image
                src={icon_5}
                className="w-[80px] grayscale h-auto"
                alt="Montage"
                title="Montage"
              />
            </div>
            <div>
              <h1 className="text-[25px]"> MOTION DESIGN </h1>
            </div>
            <div>
              <p className="text-[14px] text-center">
                Combine graphisme et animation pour créer des contenus
                dynamiques et attrayants. Il apporte une dimension
                supplémentaire qui capte l’attention et engage l’audience
                d'avantage. La communication entre le designer et le monteur est
                donc primordiale.
              </p>
            </div>
          </div>

          {/* card 6 */}

          <div className="w-[315px]  justify-start items-center h-[330px]   flex flex-col gap-[20px] ">
            <div className="text-center">
              <Image
                src={icon_6}
                className="w-[80px] grayscale h-auto"
                alt="Montage"
                title="Montage"
              />
            </div>
            <div>
              <h1 className="text-[25px]"> HABILLAGE </h1>
            </div>
            <div>
              <p className="text-[14px] text-center">
                Renforce l'identité visuelle d'une vidéo et améliore son attrait
                global. Cela comprend l'intégration d'éléments graphiques tels
                que les titres, les sous-titres, les logos, les animations de
                texte, les transitions et de l'infographie.
              </p>
            </div>
          </div>

          {/* card 7 */}

          <div className="w-[315px]  justify-start items-center h-[330px]   flex flex-col gap-[20px] ">
            <div className="text-center">
              <Image
                src={icon_7}
                className="w-[80px] grayscale h-auto"
                alt="Montage"
                title="Montage"
              />
            </div>
            <div>
              <h1 className="text-[25px]"> EXPORT / LIVRAISON </h1>
            </div>
            <div>
              <p className="text-[14px] text-center">
                Bien exécutée, cette étape permet d'atteindre la qualité
                optimale sur les supports prévus. Elle concerne le choix du
                codec, le débit, la taille... Le roundtrip pour passer d'un
                logiciel à l'autre, peut être nécessaire selon le workflow.
                Ainsi que la création de fichiers masters et de copies.
              </p>
            </div>
          </div>



        </div>
      </div>
  )
}

export default CardSec