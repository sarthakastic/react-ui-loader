import { ReactNode } from "react";

interface TextLoaderProps {
  bgColor?: string;
  widthValue?: string | number;
  heightValue?: string | number;
  zIndexing?: number;
  backgroundOpacity?: 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  justifycontent?: "center" | "start" | "end";
  alignitems?: "center" | "start" | "end";
  show: boolean;
  loaderText?: string;
  textColor?: string;
  fontSizeValue?: string;
  fontWeightValue?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  loaderColor?: string;
  loader?: boolean;
  loaderSize?: "small" | "medium" | "large";
  textAnimate?: boolean;
  children?: ReactNode;
  logo?: boolean;
  logoHeight?: string;
  logoWidth?: string;
  logoAnimate?: boolean;
  row?: boolean;
}

export { TextLoaderProps };
