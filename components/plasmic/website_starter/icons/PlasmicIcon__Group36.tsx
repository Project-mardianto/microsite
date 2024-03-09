// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group36IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group36Icon(props: Group36IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M2 5.866L7.757 2M6.21 11.795l12.287-2.32M6.21 18.325l9.71 3.523"}
        stroke={"currentColor"}
        strokeWidth={"3.437"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Group36Icon;
/* prettier-ignore-end */
