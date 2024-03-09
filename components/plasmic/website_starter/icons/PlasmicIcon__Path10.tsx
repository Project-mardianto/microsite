// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path10Icon(props: Path10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M12.225 2C12.225 7.67 7.67 12.225 2 12.225"}
        stroke={"currentColor"}
        strokeWidth={"2.32"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Path10Icon;
/* prettier-ignore-end */
