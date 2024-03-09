// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path15Icon(props: Path15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 49 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M48.803 14.778l-47.17 5.328L0 5.413 47.17 0l1.633 14.778z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path15Icon;
/* prettier-ignore-end */
