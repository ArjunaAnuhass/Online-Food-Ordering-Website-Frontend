import { Box, Button, Card, Divider, Grid, Modal, TextField, Typography } from '@mui/material'
import React from 'react'
import { CartItem } from './CartItem'
import AddressCart from './AddressCart'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik, validateYupSchema } from 'formik';
// import { object, string, number, date, InferType } from 'yup';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 4,
};

const initialValues={streetAddress:"", state:"", pinCode:"", city:""}
// const validationSchema=Object({
//   streetAddress: string().required("Street Address is required"),
//   state: string().required("State is required"),
//   pinCode: string().required("PinCode is required"),
//   city: string().required("City is required")
// })

const items=[1,1,1,1]

const Cart = () => {
  const createOrderUsingSelectedAddress=()=>{}
  const handleOpenAddressModal=()=>{setOpen(true)}
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleSubmit=(value)=>{
    console.log("value", value)
  }
  return (
    <>
        <main className='lg:flex justify-between'>
            <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
              {items.map((item)=>(<CartItem/>))}
                
              <Divider/>

              <div className='billDetails px-5 text-sm'>
                <p className='font-extralight py-5'>Bill Details</p>
                <div className='flex justify-between text-gray-400'>
                  <p>Item Total</p>
                  <p>රු.2000</p>
                </div>

                <div className='flex pt-3 justify-between text-gray-400'>
                  <p>Deliver Fee</p>
                  <p>රු.150</p>
                </div>

                <div className='flex pt-3 justify-between text-gray-400'>
                  <p>Platform Fee</p>
                  <p>රු.100</p>
                </div>

                <div className='flex pt-3 justify-between text-gray-400'>
                  <p>GST and Restaurant Chargers</p>
                  <p>රු.133</p>
                </div>

                <Divider className='px-7 pt-5'/>

                <div className='flex pt-3 justify-between text-gray-400'>
                  <p>Total Pay</p>
                  <p>රු.2383</p>
                </div>

              </div>
            </section>
            
            <Divider orientation='vertical' flexItem/>

            <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
              <div>
                <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>
                <div className='flex gap-5 flex-wrap justify-center'>
                  {[1,1,1,1].map((item)=><AddressCart handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true}/>)}
                  <Card className='flex gap-5 w-64 p-5'>
        <AddLocationAltIcon/>
        <div className='space-y-3 text-gray-500'>
            <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
            <Button variant='outlined' fullWidth onClick={handleOpenAddressModal}>Add</Button>
        </div>
    </Card>
                </div>
              </div>
            </section>

        </main>

        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>

            <Form>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field as={TextField} name="streetAddress" label="Street Address" fullWidth variant="outlined"/>
              </Grid>

              <Grid item xs={12}>
                <Field as={TextField} name="state" label="State" fullWidth variant="outlined"/>
              </Grid>

              <Grid item xs={12}>
                <Field as={TextField} name="pinCode" label="Pin Code" fullWidth variant="outlined"/>
              </Grid>

              <Grid item xs={12}>
                <Field as={TextField} name="city" label="City" fullWidth variant="outlined"/>
              </Grid>
              <Grid item xs={12} >
                <Button variant='contained' type='submit' color='primary' fullWidth>Deliver Here</Button>
              </Grid>
            </Grid>

            </Form>

            </Formik>
          </Box>
        </Modal>
    </>
  )
}

export default Cart