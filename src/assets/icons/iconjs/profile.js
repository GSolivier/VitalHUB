import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function ProfileSvg({fill = "#4E4B59"}) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G
        clipPath="url(#clip0_195_1409)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={fill}
      >
        <Path d="M14.666 8.25a3.667 3.667 0 11-7.333 0 3.667 3.667 0 017.333 0zm-1.833 0a1.833 1.833 0 11-3.666 0 1.833 1.833 0 013.666 0z" />
        <Path d="M11 .917C5.43.917.917 5.43.917 11S5.43 21.083 11 21.083 21.083 16.57 21.083 11 16.57.917 11 .917zM2.75 11c0 1.916.653 3.68 1.749 5.08a8.237 8.237 0 016.56-3.247 8.235 8.235 0 016.501 3.17A8.25 8.25 0 102.75 11zM11 19.25a8.216 8.216 0 01-5.2-1.844 6.41 6.41 0 015.26-2.74 6.408 6.408 0 015.214 2.677A8.217 8.217 0 0111 19.25z" />
      </G>
      <Defs>
        <ClipPath id="clip0_195_1409">
          <Path fill="#fff" d="M0 0H22V22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ProfileSvg