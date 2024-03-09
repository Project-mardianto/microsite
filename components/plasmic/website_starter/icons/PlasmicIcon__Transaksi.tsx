// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TransaksiIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TransaksiIcon(props: TransaksiIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M6.4 7.467a3.2 3.2 0 013.2-3.2h12.8a3.2 3.2 0 013.2 3.2v17.066a3.2 3.2 0 01-3.2 3.2H9.6a3.2 3.2 0 01-3.2-3.2V7.467zM9.6 6.4c-.59 0-1.067.478-1.067 1.067v17.066c0 .59.478 1.067 1.067 1.067h12.8c.59 0 1.067-.478 1.067-1.067V7.467c0-.59-.478-1.067-1.067-1.067H9.6zm1.067 6.273c0-.589.477-1.067 1.066-1.067H16a1.067 1.067 0 010 2.134h-4.267a1.067 1.067 0 01-1.066-1.067zm.001 3.676c0-.589.478-1.066 1.067-1.066h8.533a1.067 1.067 0 010 2.133h-8.533c-.59 0-1.067-.478-1.067-1.067zm0 3.607c0-.59.478-1.067 1.067-1.067h8.533a1.067 1.067 0 110 2.133h-8.533c-.59 0-1.067-.477-1.067-1.066z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TransaksiIcon;
/* prettier-ignore-end */
