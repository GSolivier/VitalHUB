import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function GrayClockSvg
(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_116_637)">
        <Path
          d="M7 1.167a5.833 5.833 0 110 11.666A5.833 5.833 0 017 1.167zM7 3.5a.583.583 0 00-.583.583V7c0 .155.062.303.17.412l1.75 1.75a.583.583 0 00.826-.824l-1.58-1.58V4.083A.583.583 0 007 3.5z"
          fill="#4E4B59"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_116_637">
          <Path fill="#fff" d="M0 0H14V14H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default GrayClockSvg
