import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StarSvg(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.32 8.936l-3.523 3.075 1.055 4.578a1.25 1.25 0 01-1.862 1.355l-3.993-2.422-3.984 2.422a1.249 1.249 0 01-1.863-1.355l1.054-4.573-3.524-3.08a1.25 1.25 0 01.711-2.192l4.646-.403L8.85 2.016a1.246 1.246 0 012.3 0l1.819 4.325 4.644.403a1.25 1.25 0 01.711 2.192h-.004z"
        fill="#F9A620"
      />
    </Svg>
  )
}

export default StarSvg