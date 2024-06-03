import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "./CardSkeleton";
import AvatarSkeleton from "./AvatarSkeleton";

const Loading_Skeleton = () => {
  return (
    <>
      {/* <Skeleton circle />
      <Skeleton
        circle
        height="100px"
        width="100px"
        containerClassName="avatar-skeleton"
        count={2}
      />
      <Skeleton count={3} /> */}

      {/* For other variants, adjust the size with `width` and `height` */}
      <div>
        <Skeleton circle width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={20} count={2} />
        <Skeleton variant="rounded" width={210} height={40} />
        <CardSkeleton />
        <AvatarSkeleton />
      </div>
    </>
  );
};

export default Loading_Skeleton;
