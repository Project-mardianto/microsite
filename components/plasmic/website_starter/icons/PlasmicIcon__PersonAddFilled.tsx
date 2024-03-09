// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PersonAddFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PersonAddFilledIcon(props: PersonAddFilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20 16a5.332 5.332 0 005.333-5.333A5.332 5.332 0 0020 5.333a5.332 5.332 0 00-5.333 5.334A5.332 5.332 0 0020 16zM8 13.333v-4H5.333v4h-4V16h4v4H8v-4h4v-2.667H8zm12 5.334c-3.56 0-10.667 1.786-10.667 5.333v2.667h21.334V24c0-3.547-7.107-5.333-10.667-5.333z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PersonAddFilledIcon;
/* prettier-ignore-end */
