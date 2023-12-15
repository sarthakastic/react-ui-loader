import React from "react";
import { MaxWidthWrapperProps } from "../utils/interfaces";

const MaxWidthWrapper = ({
  bgColor,
  widthValue,
  heightValue,
  zIndexing,
  justifycontent,
  alignitems,
  backgroundOpacity,
  show,
  loaderText,
  textColor,
}: MaxWidthWrapperProps) => {
  const backgroundColor = bgColor && bgColor !== "" ? bgColor : "black";
  const width = widthValue ? widthValue : "100vw";
  const height = heightValue ? heightValue : "100vh";
  const zIndex = zIndexing ? zIndexing : 10;
  const opacity = backgroundOpacity ? backgroundOpacity : 0.8;
  const justifyContent = justifycontent ? justifycontent : "center";
  const alignItems = alignitems ? alignitems : "center";
  const text = loaderText ? loaderText : "Loading...";
  const color = textColor ? textColor : "white";

  function hexToRgb(hex: string): string {
    hex = hex.replace(/^#/, "");

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `${r}, ${g}, ${b}`;
  }

  if (show === false) return;

  return (
    <div
      className="wrapper"
      style={{
        position: "fixed",
        display: "flex",
        backgroundColor: `rgba(${hexToRgb(backgroundColor)}, ${opacity})`,
        width,
        height,
        zIndex,
        justifyContent,
        alignItems,
        color,
      }}
    >
      {text}
    </div>
  );
};

export default MaxWidthWrapper;
