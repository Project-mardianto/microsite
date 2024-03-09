// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PathIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PathIcon(props: PathIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 857 638"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M856.5 0H485.568c-26.327 57.274-65.295 101.036-114.985 121.087-62.592 25.194-137.563 63.115-116.641 154.911 20.923 91.709 22.666 131.809-74.971 171.91C96.067 481.994 0 546.155 0 637.602h856.5V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PathIcon;
/* prettier-ignore-end */
