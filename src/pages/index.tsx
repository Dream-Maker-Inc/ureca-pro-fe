import type { NextPage } from "next";
import { SurveyHomeView } from "@/ui/domains/SurveyHome";
import React from "react";
import Head from "next/head";
import Script from "next/script";

const SurveyHomePage: NextPage = () => {
  return (
    <React.Fragment>
      <SurveyHomeView />
    </React.Fragment>
  );
};

export default SurveyHomePage;
