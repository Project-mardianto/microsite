// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path25Icon(props: Path25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 42"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2 39.806c7.6 0 13.747-6.076 13.747-13.587C15.747 18.793 9.6 12.717 2 12.717V2"
        }
        stroke={"currentColor"}
        strokeWidth={"3.179"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Path25Icon;
/* prettier-ignore-end */
