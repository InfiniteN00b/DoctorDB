import React from 'react'

function index() {
  return (
    // create a user profile page here
    <div>
        <Card sx={{ maxWidth: 345, mt: 2 }}>
            <AppointmentCard props={doctor} />
        </Card>
    </div>
    
  )
}

export default index