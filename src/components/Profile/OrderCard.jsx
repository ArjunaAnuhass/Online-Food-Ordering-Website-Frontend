import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img className='h-16 w-16' src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            <div>
                <p>Submarine</p>
                <p>Rs.900</p>
            </div>
        </div>

        <div>
            <Button className='cursor-not-allowed'>completed</Button>
        </div>
    </Card>
  )
}
