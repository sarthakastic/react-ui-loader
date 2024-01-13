import React from "react";
import { BlockShimmerProps } from "../utils/interfaces";
import "../../main.css";

const BlockShimmer = ({
  show,
  profilePositionCenter,
  profileShape,
  coverHeight,
  showCover,
  showLines,
  numberOfCards,
  numberOfLines,
  showCards,
  cardHeight,
  cardWidth,
  backgroundColor,
  showProfile,
  color,
}: BlockShimmerProps) => {
  const shimmerAnimationStyle = {
    animation: "shimmering 10s linear infinite",
    background: `linear-gradient(90deg, ${color} 9%, ${backgroundColor} 18%, ${color} 31%)`,
  };

  let nLines = numberOfLines ? numberOfLines : 10;
  let nPosts = numberOfCards ? numberOfCards : 10;
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
    <div
      key={index}
      className="shimmer post-shimmer"
      style={{ height: cardHeight, width: cardWidth }}
    ></div>
  ));

  return (
    <div className="shimmer-container" style={shimmerAnimationStyle}>
      {" "}
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
          animation: "shimmering 10s linear infinite",
          background: `linear-gradient(90deg, ${color} 9%, ${backgroundColor} 18%, ${color} 31%)`,
          display: showProfile === false ? "none" : "inherit",
          margin: profilePositionCenter ? "auto" : "20px",
          borderRadius,
          position: showCover === false ? "inherit" : "relative",
          bottom: showCover === false ? "0px" : "50px",
        }}
      ></div>
      {showLines === false ? null : lineShimmers}
      <div
        className="posts-container"
        style={{
          display: showCards === false ? "none" : "flex",
        }}
      >
        {PostShimmers}
      </div>
    </div>
  );
};

export default BlockShimmer;
