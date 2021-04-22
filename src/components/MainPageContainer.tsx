import React from "react";
import { AboutSection } from "./HomePageContent/AboutSection";
import { DropZoneSectionContainer } from "./HomePageContent/DropZoneSection";
import { PartnerSection } from "./HomePageContent/PartnersSection";
import About from './HomePageContent/About';

export const MainPageContainer: React.FunctionComponent = () => (
  <>
    <DropZoneSectionContainer />
    <About/>
    {/* <PartnerSection /> */}
    <AboutSection />
  </>
);
