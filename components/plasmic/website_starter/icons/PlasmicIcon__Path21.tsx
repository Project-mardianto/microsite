// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path21Icon(props: Path21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 186 267"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".2"}
        d={
          "M145.207 7.99a7.975 7.975 0 00-7.99-7.99H41.07a7.976 7.976 0 00-7.99 7.99v34.8H13.833L0 266.27h185.333V42.789h-40.126V7.99z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path21Icon;
/* prettier-ignore-end */
