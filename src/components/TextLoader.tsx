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
  textAnimate,
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
  const animate = textAnimate;

  if (show === false) return;

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
      }}
    >
      <span
        className="loader"
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
      <span className={`${animate && "animate-text"}`}>{text}</span>
    </div>
  );
};

export default TextLoader;
