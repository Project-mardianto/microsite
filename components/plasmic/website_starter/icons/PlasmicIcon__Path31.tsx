// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path31Icon(props: Path31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.39 3.695c0 2.062-1.633 3.78-3.695 3.78S0 5.757 0 3.695A3.667 3.667 0 013.695 0a3.667 3.667 0 013.694 3.695z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path31Icon;
/* prettier-ignore-end */
