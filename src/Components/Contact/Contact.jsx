import React from 'react'
import { Button } from 'react-bootstrap'

function Contact() {
  return (
    <>
      <div className='home-content'>
        <h1>Contact information</h1>

        <h4>Phone: +47 480 40 772</h4>
        <h4><a href="mailto:kurtien@live.no">Kurtien@live.no</a></h4>
        <div className='d-flex flex-row gap-2'>
        <Button className='lin' href='https://www.linkedin.com/in/kurt-lund/'>LinkedIn</Button>
        <Button className='git' href='https://github.com/Lundkurt'>Github</Button>
        </div>

        
    </div>
    </>
  )
}

export default Contact
