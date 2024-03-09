// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group28Icon(props: Group28IconProps) {
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
          "M11.16.015H2.23A2.23 2.23 0 00-.002 2.243v8.906H11.16V.015zm4.43 11.131V.016h13.398v11.13H15.591zM-.006 42.35c0 1.228 1 2.227 2.234 2.225h8.932v-11.13H-.005v8.905h-.001zm15.596 2.223v-11.13h13.398v11.13H15.591zM-.006 15.615v4.437a137.446 137.446 0 0019.43-4.437H-.006z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M31.209 28.98c1.233 0 2.23.996 2.23 2.228v13.368h8.92c1.23 0 2.23-.998 2.228-2.229V15.612H19.415A137.188 137.188 0 01-.01 20.053v8.927h31.22zm13.38-26.742c0-1.226-1-2.224-2.234-2.222h-8.932v10.32a108.101 108.101 0 0011.164-5.755V2.238h.002z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M44.588 11.149V4.59a108.329 108.329 0 01-11.163 5.762v.797h11.163z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group28Icon;
/* prettier-ignore-end */
