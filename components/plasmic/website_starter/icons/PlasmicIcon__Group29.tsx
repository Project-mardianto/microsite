// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group29Icon(props: Group29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 55 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.088 8.01a2.523 2.523 0 01-2.234 2.835C1.48 10.93.191 9.985.02 8.525-.153 7.15.878 5.861 2.253 5.69c1.46-.172 2.75.859 2.835 2.32zm9.967-1.203c.172 1.46-.859 2.749-2.234 2.835-1.46.172-2.75-.773-2.835-2.234a2.523 2.523 0 012.234-2.835c1.375-.172 2.663.859 2.835 2.234zm9.881-1.117c.172 1.46-.774 2.663-2.234 2.835-1.375.172-2.664-.86-2.836-2.234-.171-1.375.86-2.664 2.234-2.835 1.461-.172 2.75.859 2.836 2.234zm9.967-1.117c.172 1.374-.86 2.663-2.234 2.835-1.461.172-2.75-.86-2.836-2.234-.172-1.46.86-2.663 2.234-2.835 1.375-.172 2.664.859 2.836 2.234zm9.88-1.117A2.523 2.523 0 0142.55 6.29c-1.374.172-2.663-.86-2.835-2.234-.172-1.46.86-2.75 2.234-2.921 1.46-.086 2.75.859 2.835 2.32zm9.968-1.117c.172 1.374-.859 2.663-2.234 2.835-1.46.086-2.663-.86-2.835-2.32-.172-1.375.86-2.663 2.234-2.835 1.375-.172 2.664.859 2.835 2.32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group29Icon;
/* prettier-ignore-end */
