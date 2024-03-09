// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.228 10.44a5.224 5.224 0 005.229-5.22A5.224 5.224 0 005.228 0 5.224 5.224 0 000 5.22c0 2.883 2.34 5.22 5.228 5.22z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
