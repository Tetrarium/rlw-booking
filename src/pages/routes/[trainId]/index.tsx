import React from "react";

import Layout from "@/components/pages/layout";
import RoutesView from "@/components/pages/routes/routes-view/routesView";
import TrainView from "@/components/pages/routes/train-view/trainView";

const Train = () => {
  return (
    <Layout>
      <RoutesView>
        <TrainView />
      </RoutesView>
    </Layout>
  );
};

export default Train;