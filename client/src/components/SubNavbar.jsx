import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navlinks } from "../constants";

const SubNavbar = () => {
  const navigate = useNavigate();

  return (
    <header className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <nav
        className="lg:flex-1 items-center justify-between flex flex-row max-w-[100%] p-6 h-[52px] bg-[#c8c6c6] rounded-[100px]"
        aria-label="Global"
      >
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          ART GRAPHIQUE
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          EDITION
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          BD / COMICS/MANGA
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          CINEMA / SERIES / FILMS D'ANIMATION
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          GAMING
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          MUSIQUE
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          ART DE LA SCÈNE
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            MODE / DESIGN
        </a>
      </nav>
    </header>
  );
};

export default SubNavbar;
