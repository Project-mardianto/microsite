// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path17Icon(props: Path17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 6"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M1 1v3.866"}
        stroke={"currentColor"}
        strokeWidth={"1.89"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Path17Icon;
/* prettier-ignore-end */
