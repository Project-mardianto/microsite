// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaskIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaskIcon(props: MaskIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 200 444"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.316.12C15.13.56 9.932 2.976 5.643 7.87 2.196 11.802.613 16.073.166 22.649c-.303 4.46-.154 398.796.152 400.743.92 5.87 2.732 9.674 6.355 13.353 3.728 3.785 7.948 5.782 13.784 6.526 2.76.352 155.769.352 158.53 0 5.836-.744 10.055-2.741 13.784-6.526 3.697-3.754 5.566-7.758 6.362-13.623.343-2.525.343-400.194 0-402.718-.805-5.933-2.762-10.068-6.523-13.785-3.672-3.625-7.559-5.481-13.335-6.365-1.112-.17-18.713-.226-78.029-.252C59.12-.01 23.601.04 22.316.12zm1.85 7.956c2.07 1.059 3.136 2.721 3.236 5.053.084 1.945-.39 3.229-1.66 4.502-1.285 1.287-2.563 1.756-4.497 1.653-1.75-.093-2.884-.613-4.014-1.841-1.179-1.28-1.535-2.225-1.527-4.045.009-1.771.368-2.767 1.42-3.933 1.308-1.45 2.715-2.022 4.749-1.932 1.027.045 1.57.173 2.293.543z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MaskIcon;
/* prettier-ignore-end */
