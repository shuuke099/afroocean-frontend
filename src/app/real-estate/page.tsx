"use client";

import Image from "next/image";
import FeaturedListings from "@/components/common/FeaturedListings";
import WhyChooseUs from "@/components/real-state/WhyChooseUsRealEstate";
import ExploreCategories from "@/components/real-state/ExploreRealEstateCategories";
import Container from "@/components/ui/container";
import FooterLinks from "@/components/home/FooterLinks";
import CommonHero from "@/components/common/CommonHero";
import { properties } from "../data/properties";
import WhyChooseUsRealEstate from "@/components/real-state/WhyChooseUsRealEstate";

export default function RealEstateLanding() {
  return (
    <Container>
      <CommonHero
        title="Find Your Dream Home"
        subtitle="Buy, rent, or invest with AfroOcean Real Estate"
        bgImage="/real-state.jpg"
        searchPath="/real-state/search"
      />
      <FeaturedListings
        title="Home listings for you"
        items={properties}
        basePath="/realestate"
      />
      <WhyChooseUsRealEstate />
      <ExploreCategories />
      <FooterLinks />
    </Container>
  );
}
