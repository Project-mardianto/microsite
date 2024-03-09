// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group30Icon(props: Group30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 45"}
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
          "M11.16.015H2.23A2.23 2.23 0 00-.004 2.243v8.906H11.16V.015zm4.43 11.131V.016h13.398v11.13H15.591zM-.006 42.35c0 1.228 1 2.227 2.234 2.225h8.932v-11.13H-.004v8.905h-.002zm15.596 2.223v-11.13h13.398v11.13H15.591zM-.006 15.615v4.437a137.432 137.432 0 0019.43-4.437H-.006z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M31.21 28.98c1.232 0 2.23.996 2.23 2.228v13.368h8.918a2.23 2.23 0 002.23-2.229V15.612H19.414A137.174 137.174 0 01-.008 20.053v8.926h31.217zM44.588 2.238c0-1.227-1-2.224-2.233-2.223h-8.933v10.321A108.091 108.091 0 0044.587 4.58V2.238h.001z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M44.587 11.149V4.59a108.317 108.317 0 01-11.163 5.762v.797h11.163z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group30Icon;
/* prettier-ignore-end */
