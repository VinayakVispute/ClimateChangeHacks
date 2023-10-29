import React from "react";
import HeroSection from "../HeroSection";
import HomeHighlights from "../HomeHighlights";
import TreePlantationOptions from "../TreePlantationOptions";
import ClimateCrisis from "../ClimateCrisis";
import FundsUsage from "../FundsUsage";

export default function Homepage() {
  return (
    <div>
      <HeroSection />
      <HomeHighlights />
      <TreePlantationOptions />
      <ClimateCrisis />
      <FundsUsage />
    </div>
  );
}
