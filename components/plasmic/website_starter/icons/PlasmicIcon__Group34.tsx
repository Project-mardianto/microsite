// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group34Icon(props: Group34IconProps) {
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
          "M11.16.015H2.23A2.23 2.23 0 00-.004 2.243v8.906H11.16V.015zm4.431 11.131V.016H28.99v11.13H15.591zM-.006 42.35c0 1.228 1 2.227 2.234 2.226h8.932v-11.13H-.005v8.904h-.001zm15.597 2.223v-11.13H28.99v11.13H15.591zM-.006 15.615v4.437a137.418 137.418 0 0019.43-4.437H-.006z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M31.209 28.98c1.233 0 2.23.996 2.23 2.228v13.368h8.92c1.23 0 2.23-.998 2.228-2.229V15.612H19.415A137.174 137.174 0 01-.01 20.053v8.926h31.22zM44.587 2.238c0-1.227-1-2.224-2.233-2.223h-8.932v10.321A108.091 108.091 0 0044.586 4.58V2.238h.002z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M44.587 11.149V4.59a108.325 108.325 0 01-11.163 5.762v.797h11.163z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group34Icon;
/* prettier-ignore-end */
