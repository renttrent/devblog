import React from "react"
import Typical from "react-typical"

export const Animation = () => {
  return (
    <Typical
      steps={
        [
          'Hey there!', 1000,
          'rei(thedev);', 1000,
        ]
      }
      >
    </Typical>)
}

export const MemoizedAnimation = React.memo(Animation)