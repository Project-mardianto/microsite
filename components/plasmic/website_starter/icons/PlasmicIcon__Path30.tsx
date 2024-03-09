// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path30Icon(props: Path30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.029 5.155H8.592V1.718C8.592.773 7.82 0 6.874 0S5.155.773 5.155 1.718v3.437H1.718C.773 5.155 0 5.93 0 6.874c0 .945.773 1.718 1.718 1.718h3.437v3.523c0 .945.774 1.632 1.719 1.632.945 0 1.718-.687 1.718-1.632V8.592h3.437c.945 0 1.718-.773 1.718-1.718s-.773-1.719-1.718-1.719z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path30Icon;
/* prettier-ignore-end */
