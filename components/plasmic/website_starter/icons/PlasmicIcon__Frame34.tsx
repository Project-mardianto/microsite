// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame34Icon(props: Frame34IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 88 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"5"} cy={"5"} r={"5"} fill={"currentColor"}></circle>

      <circle
        opacity={".3"}
        cx={"31"}
        cy={"5"}
        r={"5"}
        fill={"currentColor"}
        fillOpacity={".5"}
      ></circle>

      <circle
        opacity={".3"}
        cx={"57"}
        cy={"5"}
        r={"5"}
        fill={"currentColor"}
        fillOpacity={".5"}
      ></circle>

      <circle
        opacity={".3"}
        cx={"83"}
        cy={"5"}
        r={"5"}
        fill={"currentColor"}
        fillOpacity={".5"}
      ></circle>
    </svg>
  );
}

export default Frame34Icon;
/* prettier-ignore-end */
