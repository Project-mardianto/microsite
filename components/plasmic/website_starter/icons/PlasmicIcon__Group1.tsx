// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1Icon(props: Group1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 85 31"}
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
          "M11.956 30.517L0 10.193h7.563l4.476 9.489 4.29-9.489h7.107L12.122 30.517h-.166zm15.252-20.324h6.382v19.91h-6.383v-19.91zm22.047 20.324L37.32 10.193h7.564l4.455 9.489 4.31-9.489h7.108L49.442 30.517h-.187zm22.69.145c-6.034 0-9.925-4.477-9.925-10.483 0-5.495 3.728-10.98 9.698-10.98 2.835 0 5.059.907 6.941 3.025l.415-2.03H85v19.909h-6.382v-2.486l-.062.062a8.793 8.793 0 01-6.61 2.983zm6.714-18.438c.028.041-.027-.028 0 0zM75.821 25.13c1.265-.49 2.18-1.488 2.797-2.673V17.59c-.488-1.328-1.529-2.31-2.84-2.818-1.53-.574-3.353-.526-4.765.331-1.667 1.012-2.528 2.85-2.528 4.765 0 1.969.971 3.842 2.673 4.869 1.38.833 3.154.942 4.663.394z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M33.984 3.211c0 1.774-1.531 3.211-3.42 3.211-1.888 0-3.419-1.437-3.419-3.21 0-1.775 1.531-3.212 3.42-3.212 1.888 0 3.419 1.437 3.419 3.211z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group1Icon;
/* prettier-ignore-end */
