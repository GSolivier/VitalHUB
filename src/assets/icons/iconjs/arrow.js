import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowSvg(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.176 7.083h11.158v1.834H4.176l4.917 4.917-1.296 1.296L.667 8 7.797.87l1.296 1.296-4.917 4.917z"
        fill="#34898F"
      />
    </Svg>
  )
}

export default ArrowSvg
