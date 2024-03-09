// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask2Icon(props: Mask2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 200 433"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.384.116C15.177.548 9.963 2.906 5.66 7.683 2.203 11.522.615 15.692.166 22.11-.138 26.465.012 411.434.32 413.335c.924 5.731 2.74 9.445 6.374 13.036 3.74 3.695 7.973 5.645 13.826 6.371 2.77.344 156.246.344 159.015 0 5.854-.726 10.086-2.676 13.826-6.371 3.709-3.665 5.583-7.573 6.382-13.299.344-2.465.344-390.688 0-393.153-.808-5.792-2.771-9.828-6.544-13.457-3.683-3.54-7.582-5.351-13.375-6.214-1.115-.166-18.77-.22-78.267-.246-42.255-.013-77.882.037-79.172.114zm1.856 7.768c2.077 1.034 3.145 2.657 3.246 4.933.084 1.899-.39 3.152-1.666 4.395-1.289 1.256-2.57 1.715-4.51 1.614-1.756-.09-2.892-.599-4.026-1.798-1.182-1.25-1.54-2.171-1.531-3.948.008-1.73.368-2.701 1.424-3.84 1.311-1.415 2.722-1.974 4.763-1.886 1.03.044 1.574.17 2.3.53z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask2Icon;
/* prettier-ignore-end */
