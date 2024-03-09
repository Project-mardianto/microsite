// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path5Icon(props: Path5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M51.73 14.778l-50 5.328L0 5.413 50 0l1.73 14.778z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path5Icon;
/* prettier-ignore-end */
