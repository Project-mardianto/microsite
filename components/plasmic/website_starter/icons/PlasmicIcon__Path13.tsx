// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path13Icon(props: Path13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 90 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M89.53 14.693L1.633 24.745 0 10.053 87.812 0l1.718 14.693z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path13Icon;
/* prettier-ignore-end */
