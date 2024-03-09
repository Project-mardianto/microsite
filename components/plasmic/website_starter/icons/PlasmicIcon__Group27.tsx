// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group27Icon(props: Group27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 70 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.444 3.265a3.172 3.172 0 01-3.179 3.18C1.461 6.444 0 4.983 0 3.264A3.264 3.264 0 013.265 0c1.804 0 3.18 1.46 3.18 3.265zm12.631 0c0 1.718-1.46 3.18-3.265 3.18a3.172 3.172 0 01-3.18-3.18C12.63 1.461 14.007 0 15.81 0a3.264 3.264 0 013.265 3.265zm12.545 0c0 1.718-1.461 3.18-3.265 3.18-1.719 0-3.18-1.462-3.18-3.18 0-1.804 1.461-3.265 3.18-3.265a3.264 3.264 0 013.265 3.265zm12.544 0c0 1.718-1.46 3.18-3.18 3.18-1.804 0-3.264-1.462-3.264-3.18A3.264 3.264 0 0140.985 0c1.718 0 3.179 1.46 3.179 3.265zm12.631 0c0 1.718-1.46 3.179-3.265 3.179-1.805 0-3.265-1.46-3.265-3.18A3.264 3.264 0 0153.53 0a3.264 3.264 0 013.265 3.265zm12.544 0c0 1.718-1.461 3.18-3.265 3.18-1.719 0-3.18-1.462-3.18-3.18 0-1.804 1.461-3.265 3.18-3.265a3.264 3.264 0 013.265 3.265z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group27Icon;
/* prettier-ignore-end */
