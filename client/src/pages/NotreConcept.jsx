import React from "react";

function NotreConcept() {
  return (
    <div className="flex flex-col h-screen py-10 px-10 object-fill">
      <div className="h-full bg-cover bg-center bg-[url('./assets/notreconceptbg.jpg')]" />
      <h1 className="font-bold text-3xl uppercase">OWN WHAT YOU LOVE</h1>
      <p className="font-epilogue font-normal text-[16px] text-[rgba(0,0,0,0.8)] leading-[26px] text-justify">
        Le projet vise à introduire la technologie blockchain dans l'industrie
        du financement participatif pour en tirer le meilleur des deux mondes et
        créer une nouvelle voie dans la manière de financer des projets grâce à
        la tokenisation et à la technologie NFT. Notre mission est de proposer
        un modèle gagnant/gagnant aux porteurs de projet ainsi qu'aux
        investisseurs. D'un côté, les créatifs et les talents des industries
        artistiques, culturelles et sportives pourront partiellement ou
        totalement s'affranchir des financiers traditionnels qui sont
        difficilement accessibles aux acteurs de petite et moyenne taille. De
        l'autre côté, les supporters et les fans deviendront de véritables co-
        producteurs de ce qu'ils aiment et posséderont une part des projets dans
        lesquels ils auront investis. Grâce à la tokenisation des actifs, les
        revenus générés par les projets seront matérialisés par des NFTs donnant
        droit à un pourcentage des bénéfices sous forme de royalties. Dès lors,
        les NFTs en question seront échangeables sur la marketplace permettant
        ainsi la liquidité de l'investissement.
      </p>
    </div>
  );
}

export default NotreConcept;
