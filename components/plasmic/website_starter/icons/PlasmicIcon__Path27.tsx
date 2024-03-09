// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path27Icon(props: Path27IconProps) {
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
          "M7.475 3.695c0 2.062-1.632 3.78-3.694 3.78C1.718 7.475 0 5.757 0 3.695S1.718 0 3.78 0a3.667 3.667 0 013.695 3.695z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path27Icon;
/* prettier-ignore-end */
