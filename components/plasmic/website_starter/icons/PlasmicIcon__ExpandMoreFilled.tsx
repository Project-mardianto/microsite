// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExpandMoreFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExpandMoreFilledIcon(props: ExpandMoreFilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M16.59 8.295L12 12.875l-4.59-4.58L6 9.705l6 6 6-6-1.41-1.41z"}
        fill={"currentColor"}
        fillOpacity={".54"}
      ></path>
    </svg>
  );
}

export default ExpandMoreFilledIcon;
/* prettier-ignore-end */
