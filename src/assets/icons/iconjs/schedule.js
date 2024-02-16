import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function ScheduleSvg({fill = "#4E4B59" }) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_196_1488)">
        <Path
          d="M14.667 2.75a.916.916 0 01.916.917v.916h1.834a1.833 1.833 0 011.828 1.696l.005.138v11a1.833 1.833 0 01-1.696 1.828l-.137.005H4.583a1.834 1.834 0 01-1.828-1.696l-.005-.137v-11a1.833 1.833 0 011.696-1.83l.137-.004h1.834v-.916a.917.917 0 111.833 0v.916h5.5v-.916a.917.917 0 01.917-.917zm-1.078 5.847L9.7 12.486 8.403 11.19a.917.917 0 00-1.296 1.296l1.938 1.939a.927.927 0 001.31 0l4.53-4.531a.917.917 0 10-1.296-1.297z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_196_1488">
          <Path fill="#fff" d="M0 0H22V22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ScheduleSvg
