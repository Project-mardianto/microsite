// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 200 434"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.384.117C15.177.549 9.963 2.913 5.66 7.7 2.203 11.549.615 15.728.166 22.162-.138 26.526.012 412.385.32 414.29c.924 5.744 2.74 9.466 6.374 13.066 3.74 3.703 7.973 5.658 13.826 6.386 2.77.344 156.246.344 159.015 0 5.854-.728 10.086-2.683 13.826-6.386 3.709-3.673 5.583-7.591 6.382-13.33.344-2.471.344-391.59 0-394.06-.808-5.806-2.771-9.852-6.544-13.489-3.683-3.548-7.582-5.363-13.375-6.228-1.115-.166-18.77-.221-78.267-.247C59.301-.01 23.674.04 22.384.117zm1.856 7.785c2.077 1.036 3.145 2.663 3.246 4.945.084 1.903-.39 3.16-1.666 4.405-1.289 1.259-2.57 1.719-4.51 1.618-1.756-.092-2.892-.6-4.026-1.802-1.182-1.253-1.54-2.177-1.531-3.958.008-1.733.368-2.707 1.424-3.849 1.311-1.418 2.722-1.978 4.763-1.89 1.03.044 1.574.17 2.3.531z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
