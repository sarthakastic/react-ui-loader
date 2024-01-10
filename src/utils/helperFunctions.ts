export function loaderMeasurements(size: string): string {
  if (size === "small") {
    return "16px";
  } else if (size === "medium") {
    return "32px";
  } else if (size === "large") {
    return "64px";
  } else return "48px";
}

export function hexToRgb(hex: string): string {
  hex = hex.replace(/^#/, "");

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r}, ${g}, ${b}`;
}
