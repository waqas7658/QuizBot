import React from "react";
import Navbar from "../../Components/Navbar";
import HeroSection from "../../Components/HeroSection";
import Benefits from "../../Components/Benefits";
import InterviewPractice from "../../Components/InterviewPractice";
import HelpYou from "../../Components/HelpYou";
import Footer from "../../Components/Footer";
import JoinCommunity from "../../Components/JoinCommunity";
import GetStarted from "../../Components/GetStarted";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Benefits />
      <HelpYou />
      <InterviewPractice />
      <JoinCommunity />
      <GetStarted />
      <Footer />
    </>
  );
};

export default Home;
