import React from "react";

import About from "@/components/about/about";
import Feedbacks from "@/components/feedbacks/feedbacks";
import HowItWork from "@/components/howItWork/howItWork";
import { makeServer } from "@/mockServer/server";

makeServer();

export default function Main() {
  return (
    <main>
      <About />
      <HowItWork />
      <Feedbacks />
    </main>
  );
}