import { SvgIconProps } from "../types";

export const Image = ({ src, width, height }: SvgIconProps) => (
  <img src={`/img/images/${src}`} alt={src} width={width} height={height} />
);
