// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path29Icon(props: Path29IconProps) {
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
          "M7.475 3.78c0 2.063-1.718 3.695-3.78 3.695A3.667 3.667 0 010 3.781C0 1.718 1.633 0 3.695 0s3.78 1.718 3.78 3.78z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path29Icon;
/* prettier-ignore-end */
