import React from "react";
import { BlockShimmerProps } from "../utils/interfaces";
import "../../main.css";

const BlockShimmer = ({
  show,
  profilePositionCenter,
  profileShape,
  coverHeight,
  showCover,
}: BlockShimmerProps) => {
  //   const shimmerAnimationStyle = {
  //     animation: "shimmering 10s linear infinite",
  //     background: "linear-gradient(90deg, red 9%, orange 78%, red 31%)",
  //   };

  let nLines = 10;
  let nPosts = 10;
  let borderRadius;

  if (profileShape === "roundedCorner") {
    borderRadius = "10%";
  } else if (profileShape === "square") {
    borderRadius = 0;
  }

  if (!show) return;
  const lineShimmers = Array.from({ length: nLines }, (_, index) => (
    <div key={index} className="shimmer line-shimmer"></div>
  ));
  const PostShimmers = Array.from({ length: nPosts }, (_, index) => (
    <div key={index} className="shimmer post-shimmer"></div>
  ));

  return (
    <div className="shimmer-container">
      <div
        className="cover-shimmer shimmer"
        style={{
          height: coverHeight,
          display: showCover === false ? "none" : "inherit",
        }}
      ></div>
      <div
        className="profile-shimmer profile-shimmer-animation"
        style={{
          margin: profilePositionCenter ? "auto" : "20px",
          borderRadius,
          position: showCover === false ? "inherit" : "relative",
          bottom: showCover === false ? "0px" : "50px",
        }}
      ></div>
      {lineShimmers}
      <div className="posts-container">{PostShimmers}</div>
    </div>
  );
};

export default BlockShimmer;
