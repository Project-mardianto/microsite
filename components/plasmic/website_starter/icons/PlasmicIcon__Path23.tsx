// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path23Icon(props: Path23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 151 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M150.277 25.09H0V0h150.277v25.09z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path23Icon;
/* prettier-ignore-end */
