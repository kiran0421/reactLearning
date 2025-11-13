import React from "react";
import "./LandingPage.css";
import Header from "../components/common/Header";
import Main from "../components/landingPage/Main";
import Footer from "../components/common/Footer";
const LandingPage = () => {
  return (
    <div className="lp">
      <div className="lp-header">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
