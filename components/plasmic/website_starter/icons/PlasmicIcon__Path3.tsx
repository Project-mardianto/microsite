// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path3Icon(props: Path3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 84 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 29.568c.407-8.888 7.668-15.917 16.614-15.917.697 0 1.394.04 2.091.117C22.365 5.693 30.556 0 40.083 0c7.494 0 14.174 3.602 18.473 9.12a18.52 18.52 0 015.693-.871c10.63 0 19.286 8.655 19.286 19.344 0 .659-.02 1.317-.058 1.975H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path3Icon;
/* prettier-ignore-end */
