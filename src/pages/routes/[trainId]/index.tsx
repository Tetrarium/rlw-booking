import React from "react";

import Layout from "@/components/pages/layout";
import RoutesView from "@/components/pages/routes/routes-view/routesView";
import SeatsPage from "@/components/pages/seats-page/seatsPage";

const Train = () => {
  return (
    <Layout>
      <RoutesView>
        <SeatsPage />
      </RoutesView>
    </Layout>
  );
};

export default Train;