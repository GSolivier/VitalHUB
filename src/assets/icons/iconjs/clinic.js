import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function ClinicSvg({fill = "#4E4B59" }) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_196_1440)">
        <Path
          d="M13.75 1.833a1.834 1.834 0 011.833 1.834V8.25h1.834a1.833 1.833 0 011.833 1.833v9.075a1.007 1.007 0 01-1.008 1.009H3.758a1.01 1.01 0 01-1.008-1.009V3.667a1.833 1.833 0 011.833-1.834h9.167zm0 1.834H4.583v14.666h1.834v-2.75a2.75 2.75 0 015.5 0v2.75h1.833V3.667zm3.667 6.416h-1.834v8.25h1.834v-8.25zm-8.25 4.584a.917.917 0 00-.91.81l-.007.106v2.75h1.833v-2.75a.917.917 0 00-.916-.916zm0-9.167a.917.917 0 01.916.917v.916H11a.917.917 0 010 1.834h-.917v.916a.917.917 0 01-1.833 0v-.916h-.917a.917.917 0 010-1.834h.917v-.916a.917.917 0 01.917-.917z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_196_1440">
          <Path fill="#fff" d="M0 0H22V22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ClinicSvg