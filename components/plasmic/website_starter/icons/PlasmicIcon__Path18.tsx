// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path18Icon(props: Path18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 72 99"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M71.322 93.598c0 2.457-2 4.457-4.457 4.457H4.457C2 98.055 0 96.055 0 93.598V4.46C0 2.002 2 .003 4.457.003h45.874L71.322 20.98v72.617z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path18Icon;
/* prettier-ignore-end */
