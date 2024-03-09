// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group32Icon(props: Group32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 94 9"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.764 4.382c0 2.406-1.976 4.382-4.382 4.382C1.976 8.764 0 6.788 0 4.382 0 1.976 1.976 0 4.382 0c2.406 0 4.382 1.976 4.382 4.382zm16.926 0c0 2.406-1.975 4.382-4.381 4.382s-4.296-1.976-4.296-4.382c0-2.406 1.89-4.382 4.296-4.382 2.406 0 4.382 1.976 4.382 4.382zm17.013 0c0 2.406-1.977 4.382-4.382 4.382-2.406 0-4.382-1.976-4.382-4.382C33.939 1.976 35.915 0 38.32 0c2.405 0 4.382 1.976 4.382 4.382zm16.927 0c0 2.406-1.891 4.382-4.383 4.382-2.406 0-4.296-1.976-4.296-4.382 0-2.406 1.89-4.382 4.296-4.382 2.492 0 4.382 1.976 4.382 4.382zm17.012 0c0 2.406-1.976 4.382-4.382 4.382-2.406 0-4.382-1.976-4.382-4.382C67.878 1.976 69.854 0 72.26 0c2.406 0 4.382 1.976 4.382 4.382zm16.926 0c0 2.406-1.89 4.382-4.296 4.382-2.406 0-4.382-1.976-4.382-4.382C84.89 1.976 86.866 0 89.272 0c2.405 0 4.296 1.976 4.296 4.382z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group32Icon;
/* prettier-ignore-end */
