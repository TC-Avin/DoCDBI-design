import React from 'react'
import {
    Tooltip,
  } from 'react-tippy';
const TippyWrapper = (props) => {
  return (
<Tooltip
  position={props.position||"bottom"}
>
  {props.children}
</Tooltip>  )
}

export default TippyWrapper