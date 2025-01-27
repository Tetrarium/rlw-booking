import { useSearchParams } from "next/navigation";
import React from "react";

import { useGetRoutesQuery } from "@/API/API";

const RoutesContent = () => {
  const searchParams = useSearchParams();
  console.log(searchParams.toString());
  const searchStr = searchParams.toString();
  console.log(searchStr);
  const { data, isLoading, error } = useGetRoutesQuery(searchStr);
  console.log('Loading: ', isLoading);
  console.log('error: ', error);
  console.log('data: ', data);

  return (
    <div>
      <h1>RoutesContent</h1>
    </div>
  );
};

export default RoutesContent;