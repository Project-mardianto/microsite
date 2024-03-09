// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path11Icon(props: Path11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M2 2l1.46 3.093"}
        stroke={"currentColor"}
        strokeWidth={"2.32"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Path11Icon;
/* prettier-ignore-end */
