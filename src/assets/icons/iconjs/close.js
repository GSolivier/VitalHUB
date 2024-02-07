import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CloseSvg(props) {
  return (
    <Svg
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.458 7.607L16.232.833l1.935 1.935-6.773 6.774 6.773 6.773-1.936 1.935-6.773-6.773-6.773 6.773L.75 16.315l6.773-6.773L.75 2.768 2.685.833l6.773 6.774z"
        fill="#34898F"
      />
    </Svg>
  )
}

export default CloseSvg
