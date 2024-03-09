// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask3Icon(props: Mask3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 200 508"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.316.136C15.13.642 9.932 3.407 5.643 9.006 2.196 13.506.613 18.395.166 25.92c-.303 5.104-.154 456.387.152 458.616.92 6.718 2.732 11.071 6.355 15.281 3.728 4.332 7.948 6.618 13.784 7.469 2.76.402 155.769.402 158.53 0 5.836-.851 10.055-3.137 13.784-7.469 3.697-4.296 5.566-8.878 6.362-15.59.343-2.89.343-457.988 0-460.877-.805-6.79-2.762-11.52-6.523-15.775-3.672-4.15-7.559-6.273-13.335-7.284-1.112-.194-18.713-.259-78.029-.289-42.126-.015-77.645.044-78.93.134zm1.85 9.106c2.07 1.212 3.136 3.114 3.236 5.783.084 2.226-.39 3.695-1.66 5.152-1.285 1.473-2.563 2.01-4.497 1.892-1.75-.107-2.884-.702-4.014-2.107-1.179-1.466-1.535-2.546-1.527-4.629.009-2.027.368-3.166 1.42-4.501 1.308-1.659 2.715-2.314 4.749-2.212 1.027.052 1.57.2 2.293.622z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask3Icon;
/* prettier-ignore-end */
