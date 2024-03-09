// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path22Icon(props: Path22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 193 224"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M192.378 223.482H0V0h192.378v223.482z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path22Icon;
/* prettier-ignore-end */
