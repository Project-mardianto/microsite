// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path24Icon(props: Path24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 81 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M80.68 25.09H0V0h80.68v25.09z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Path24Icon;
/* prettier-ignore-end */
