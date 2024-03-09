// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path26Icon(props: Path26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M2 4.578V2"}
        stroke={"currentColor"}
        strokeWidth={"3.179"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Path26Icon;
/* prettier-ignore-end */
