import React from "react";

import About from "@/components/landing/about/about";
import Feedbacks from "@/components/landing/feedbacks/feedbacks";
import HowItWork from "@/components/landing/howItWork/howItWork";

export default function Main() {
  return (
    <main>
      <About />
      <HowItWork />
      <Feedbacks />
    </main>
  );
}