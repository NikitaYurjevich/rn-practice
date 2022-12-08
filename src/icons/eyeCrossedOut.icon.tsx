import React from "react";
import Svg, { Path } from "react-native-svg";

interface IProps {
  width: number;
}

const EyeCrossedOut = ({ width }: IProps) => {
  return (
    <Svg width={width} height={width * 0.7} viewBox="0 0 20 14" fill="none">
      <Path
        d="M6.91302 2.85219C8.81312 1.71213 11.1869 1.71213 13.087 2.85218L17.1417 5.28501C18.4364 6.06182 18.4364 7.93818 17.1417 8.71499L13.087 11.1478C11.1869 12.2879 8.81312 12.2879 6.91303 11.1478L2.85831 8.71499C1.56363 7.93818 1.56363 6.06182 2.85831 5.28501L6.91302 2.85219Z"
        stroke="#8F99A6"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <Path
        d="M19 1L1 15"
        stroke="#8F99A6"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default EyeCrossedOut;
