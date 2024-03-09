// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path8Icon(props: Path8IconProps) {
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
          "M71.323 93.595c0 2.457-2 4.457-4.458 4.457H4.458C2 98.052 0 96.052 0 93.595V4.457C0 2 2 0 4.458 0H50.33l20.992 20.978v72.617z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path8Icon;
/* prettier-ignore-end */
