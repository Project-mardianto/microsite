// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path9Icon(props: Path9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.96 3.523c0 1.89-1.547 3.523-3.523 3.523C1.547 7.046 0 5.413 0 3.523 0 1.547 1.547 0 3.437 0A3.484 3.484 0 016.96 3.523z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path9Icon;
/* prettier-ignore-end */
