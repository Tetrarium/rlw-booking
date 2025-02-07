import React from "react";

import Layout from "@/components/pages/layout";
import RoutesView from "@/components/pages/routes-view/routesView";
import { useInitDataFromQuery } from "@/hooks/useInitDataFromQuery";

const Routes = () => {
  useInitDataFromQuery();

  return (
    <>
      <Layout>
        <RoutesView />
      </Layout>
    </>
  );
};

export default Routes;