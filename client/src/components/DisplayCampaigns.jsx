import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import FundCard from "./FundCard";
import { loader } from "../assets";
import { CustomButton } from "./";


const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  return (
    <div>
      <div className="flex h-[624px] py-24 px-10 object-fill">
        <div className="md:w-1/4 text-black">
          <p className="font-bold text-sm uppercase">Crowdfunding</p>
          <p className="text-3xl font-bold">Artistryfund</p>
          <p className="text-2xl mb-10 leading-none">
          Investissez dans ce que vous aimez !
          </p>
          <div className="flex mx-4">
              <CustomButton
              btnType="button"
              title="Notre Concept"
              styles={"bg-[#8c6dfd]"}
              handleClick={() => {
                navigate("notre-concept");
              }}
            />
          </div>
        </div>
        <div className="md:w-3/4 bg-cover bg-right   bg-[url('./assets/backimage.jpg')]" />
      </div>
      <h1 className="font-epilogue font-semibold text-[18px] text-black text-left pt-10">
        {title} ({campaigns.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img
            src={loader}
            alt="loader"
            className="w-[100px] h-[100px] object-contain"
          />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[rgba(0,0,0,0.8)]">
            Vous n'avez pas encore créé de campagnes
          </p>
        )}

        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <FundCard
              key={uuidv4()}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
