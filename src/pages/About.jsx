import React from "react";
import { DescriptionPanel } from "../components/DescriptionPanel";
import { ImageBanner } from "../components/ImageBanner";
import Banner from "../layout/Banner";
import "./About.scss";

function About() {
  return (
    <>
    <ImageBanner />
    <div className="about__container">
    <DescriptionPanel />
    <DescriptionPanel />
    <DescriptionPanel />
    <DescriptionPanel />
    </div>
    </>
  );
}

export default About;