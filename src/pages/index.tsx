import React from "react";

import About from "@/components/landing/about/about";
import Feedbacks from "@/components/landing/feedbacks/feedbacks";
import HowItWork from "@/components/landing/howItWork/howItWork";
import Layout from "@/components/landing/layout";

export default function Main() {
  return (
    <Layout>
      <main>
        <About />
        <HowItWork />
        <Feedbacks />
      </main>
    </Layout>
  );
}