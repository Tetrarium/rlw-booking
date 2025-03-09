import React from "react";

import Layout from "@/components/pages/layout";
import RoutesBlock from "@/components/pages/routes/routes-block/routesBlock";
import RoutesView from "@/components/pages/routes/routes-view/routesView";
import { useInitDataFromQuery } from "@/hooks/useInitDataFromQuery";

const Routes = () => {
  useInitDataFromQuery();

  return (
    <Layout>
      <RoutesView>
        <RoutesBlock />
      </RoutesView>
    </Layout>
  );
};

export default Routes;