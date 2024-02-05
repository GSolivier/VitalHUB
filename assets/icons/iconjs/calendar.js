import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CalendarSvg(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.083 11.083H2.917V4.667h8.166M9.333.583V1.75H4.667V.583H3.5V1.75h-.583c-.648 0-1.167.52-1.167 1.167v8.166a1.167 1.167 0 001.167 1.167h8.166a1.167 1.167 0 001.167-1.167V2.917a1.167 1.167 0 00-1.167-1.167H10.5V.583M9.917 7H7v2.917h2.917V7z"
        fill="#49B3BA"
      />
    </Svg>
  )
}

export default CalendarSvg
