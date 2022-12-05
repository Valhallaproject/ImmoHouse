import React from "react";
import "./banner.css";

interface BannerProps {
  title: string;
  image: string
}

const Banner = ({ title, image }: BannerProps) => (
  <div
    className="banner"
    style={{
      backgroundImage: `url(" ${image} ")`,
      backgroundSize: "cover",
      backgroundPosition: "bottom",
    }}
  >
    <h1 className="bannerTitle">{title}</h1>
  </div>
);

export default Banner;
