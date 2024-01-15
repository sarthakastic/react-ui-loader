import React from "react";
import { TextLoaderProps } from "../utils/interfaces";
import { loaderMeasurements, hexToRgb } from "../utils/helperFunctions";
import "../../main.css";

const TextLoader = ({
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
  fontSizeValue,
  fontWeightValue,
  loader,
  loaderColor,
  loaderSize,
  loaderStyle,
  textAnimate,
  children,
  logo,
  logoHeight,
  logoWidth,
  logoAnimate,
  row,
}: TextLoaderProps) => {
  const backgroundColor = bgColor && hexToRgb(bgColor);
  const width = widthValue;
  const height = heightValue;
  const zIndex = zIndexing;
  const opacity = backgroundOpacity;
  const justifyContent = justifycontent ? justifycontent : "center";
  const alignItems = alignitems ? alignitems : "center";
  const text = loaderText ? loaderText : "Loading...";
  const color = textColor ? textColor : "white";
  const fontSize = fontSizeValue ? fontSizeValue : "18px";
  const fontWeight = fontWeightValue ? fontWeightValue : 400;
  const loaderBorderColor = loaderColor;
  const showLoader = loader;
  const loaderDimension = loaderSize && loaderMeasurements(loaderSize);
  const flexDirection = !row ? "column" : "row";

  if (show === false) return null;

  return (
    <div
      className="TextLoader"
      style={{
        backgroundColor: `rgba(${backgroundColor}, ${opacity})`,
        width,
        height,
        zIndex,
        justifyContent,
        alignItems,
        color,
        fontSize,
        fontWeight,
        flexDirection,
      }}
    >
      <span
        className={`${loaderStyle === "CircularLoader" && "CircularLoader"}`}
        style={{
          borderBottomColor: "transparent",
          borderTopColor: loaderBorderColor,
          borderLeftColor: loaderBorderColor,
          borderRightColor: loaderBorderColor,
          display: showLoader ? "inherit" : "none",
          height: loaderDimension,
          width: loaderDimension,
        }}
      ></span>{" "}
      <span
        className={`${loaderStyle === "DotLoader" && "DotLoader"}`}
        style={{ color: loaderColor, display: showLoader ? "inherit" : "none" }}
      ></span>{" "}
      <span
        className={`${logoAnimate && "animate-logo"}`}
        style={{
          display: logo ? "flex" : "none",
          width: logoWidth,
          height: logoHeight,
        }}
      >
        {children}
      </span>
      <span className={`${textAnimate && "animate-text"}`}>{text}</span>
    </div>
  );
};

export default TextLoader;
