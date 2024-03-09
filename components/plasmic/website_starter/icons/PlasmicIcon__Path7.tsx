// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path7Icon(props: Path7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 112 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M111.354 18.645H0V0h111.354v18.645z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path7Icon;
/* prettier-ignore-end */
