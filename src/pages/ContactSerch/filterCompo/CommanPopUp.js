import { Card } from '@mui/material'
import React from 'react';
import { Button} from '@mui/material';

const CommanPopUp = (props) => {
  return (
      <Card className={`common-pop-up-card ${props.className}`}>
        
        <div className={ "comman-pop-up-wrapper p-3" }>{props.children}</div>
        <p className='d-flex justify-content-end m-0'>
          <Button variant="contained" onClick={props.DoneTitle} >Done</Button>
        </p>
       

      </Card>
  )
}

export default CommanPopUp