import React from "react";
import Skeleton from "react-loading-skeleton";

const AvatarSkeleton = () => {
  return (
    <div className="d-flex justify-content-center ">
      <Skeleton circle height={100} width={100} />
      <div className="d-flex flex-column justify-content-center align-item-center p-4">
        <Skeleton width={200} />
        <Skeleton width={100} />
      </div>
    </div>
  );
};

export default AvatarSkeleton;
