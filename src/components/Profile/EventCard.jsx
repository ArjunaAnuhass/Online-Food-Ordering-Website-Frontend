import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div className='justify-center'>
        <Card sx={{width:345}}>
            <CardMedia sx={{height:345}} image='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800'/>

            <CardContent>
                <Typography variant='h5'>
                    Indian Fast Food
                </Typography>

                <Typography variant='h5'>
                    35% off on your first order
                </Typography>

                <div className='py-2 space-y-2'>
                    <p>{"Mumbai"}</p>
                    <p className='text-sm text-blue-500'>July 4, 2024 12:00 AM</p>
                    <p className='text-sm text-red-500'>July 10, 2024 12:00 PM</p>
                </div>

            </CardContent>

            {true && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}
