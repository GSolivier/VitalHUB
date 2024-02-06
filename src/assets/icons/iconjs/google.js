import * as React from "react"
import Svg, { Path } from "react-native-svg"

function GoogleSvg
(props) {
  return (
    <Svg
      width={14}
      height={15}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.344 7.914c0 3.883-2.653 6.617-6.563 6.617A6.745 6.745 0 010 7.75 6.763 6.763 0 016.781.969c1.805 0 3.364.683 4.54 1.777L9.46 4.523C7.055 2.2 2.57 3.95 2.57 7.75c0 2.379 1.886 4.293 4.21 4.293 2.68 0 3.692-1.914 3.828-2.926H6.781V6.793h6.453c.055.355.11.684.11 1.121z"
        fill="#496BBA"
      />
    </Svg>
  )
}

export default GoogleSvg
