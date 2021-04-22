import React from "react";
import { aboutImages } from "./AboutImages";

export const AboutSection: React.FunctionComponent = () => {
  const howitworks: { key: keyof typeof aboutImages; text: string }[] = [
    {
      key: "onetwo",
      text:
        "Lorsqu'un document est créé, un code numérique unique y est marqué. Ce code, ainsi que les informations condensées du document, sont stockés sur la blockchain .",
    },
    {
      key: "three",
      text:
        "Lorsque vous ouvrez le document sur ce site, son contenu sera comparé à ce qui a été stocké sur la blockchain.",
    },
    {
      key: "four",
      text:
        "Nous vérifierons si le contenu correspond . De cette façon, vous saurez si le certificat est valide lorsque vous essayez de le consulter.",
    },
  ];

  return (
    <>
      <section className="bg-navy text-white py-20">
        <div className="container">
          <h2 className="font-montserrat mb-12 pl-8 border-l-4 border-orange">Ce que nous pouvons vous aider à faire</h2>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 py-6">
              <div className="flex flex-wrap">
                <div className="w-auto">{aboutImages.valid()}</div>
                <div className="w-2/3 px-6">
                  <h3 className="font-montserrat font-bold text-orange mb-2">Vue</h3>
                  <p>Un moyen simple de consulter votre document </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 py-6">
              <div className="flex flex-wrap">
                <div className="w-auto">{aboutImages.genuine()}</div>
                <div className="w-2/3 px-6">
                  <h3 className="font-montserrat font-bold text-orange mb-2">Vérifier</h3>
                  <p>Assurez-vous qu'il n'a pas été altéré</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 py-6">
              <div className="flex flex-wrap">
                <div className="w-auto">{aboutImages.institution()}</div>
                <div className="w-2/3 px-6">
                  <h3 className="font-montserrat font-bold text-orange mb-2">Chercher et  Vérifier</h3>
                  <p>Découvrez s'il provient d'une institution reconnue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-100 py-20">
        <div className="container">
          <h2 className="font-montserrat mb-12 pl-8 border-l-4 border-orange">Comment ça fonctionne</h2>
          <div className="bg-white rounded shadow-md p-8">
            {howitworks.map((item, i) => (
              <div key={i} className="flex flex-wrap items-center justify-center py-8">
                <div className="w-auto">{aboutImages[item.key]()}</div>
                <div className="w-full lg:w-2/5 mt-4 lg:ml-8 lg:mt-0">
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
