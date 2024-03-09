// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path2Icon(props: Path2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 124 44"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 43.648c.601-13.06 11.342-23.542 24.573-23.542 1.032 0 2.063.086 3.094.257C33.08 8.334 45.195 0 59.2 0c11.17 0 21.05 5.241 27.409 13.404 2.663-.774 5.499-1.29 8.42-1.29 15.724 0 28.526 12.803 28.526 28.613 0 .974-.029 1.947-.086 2.921H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path2Icon;
/* prettier-ignore-end */
