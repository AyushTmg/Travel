import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = () => {
  return (
    <div>
      <Skeleton width={300} height={200} />
      <Skeleton width={300} />
      <Skeleton width={200} />
    </div>
  );
};

export default CardSkeleton;
