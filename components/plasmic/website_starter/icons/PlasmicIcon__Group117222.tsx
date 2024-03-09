// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group117222IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group117222Icon(props: Group117222IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M3.976 2.172c0 7.647 6.186 13.833 13.747 13.833M3.976 2L2 6.124"}
        stroke={"currentColor"}
        strokeWidth={"3.179"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Group117222Icon;
/* prettier-ignore-end */
