// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CombinedShapeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CombinedShapeIcon(props: CombinedShapeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 72 64"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M4.459 63.06A4.463 4.463 0 010 58.603V26.594c1.77-.107 3.552-.248 5.34-.422C32.445 23.526 56.005 13.584 71.32 0v58.602a4.463 4.463 0 01-4.457 4.457H4.459z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CombinedShapeIcon;
/* prettier-ignore-end */
