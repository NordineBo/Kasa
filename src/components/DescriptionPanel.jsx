import React from "react";
import "./DescriptionPanel.scss";

export function DescriptionPanel() {
    return (
      <div className="description__panel">
      <p className="description__header">
      <span>Description</span>
      <i className="fa-sharp fa-solid fa-chevron-up"></i>
      </p>
      <p className="description__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quae inventore unde illum animi,
           laborum quidem ipsum itaque culpa fugiat harum, blanditiis porro iure et aut. Iure vero quod, 
           accusantium libero reprehenderit cum aspernatur at animi eius alias voluptatum, hic quis esse 
           reiciendis eos eligendi, expedita nihil ullam deleniti magnam!
      </p>
      </div>
    )
  }