import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const RegisterForm = () => {

  const initialValues = {fullname:"", email:"", password:"", role:"",};
  const handleSubmit = (values) => {
    console.log("form values", values)
  }

  const navigate = useNavigate();

  return (
    <div>

      <Typography variant='h5' className='text-center'>
        Register
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        
        <Form>
          <Field as = {TextField}
                  name="fullname"
                  label="Full Name"
                  fullWidth
                  variant="outlined"
                  margin="normal"/>
          
          <Field as = {TextField}
                  name="email"
                  label="Email Address"
                  fullWidth
                  variant="outlined"
                  margin="normal"/>
          
          <Field as = {TextField}
                  name="password"
                  label="Password"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  type="password"/>

          <FormControl fullWidth margin='normal'>
            <InputLabel id='role-simple-select-label'>Role</InputLabel>
            <Field
                  as={Select}
                  name="role"
                  labelId='role-simple-select-label'
                  id='demo-simple-select'
                  label='Role'>
                    <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                    <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
            </Field>
          </FormControl>

          <Button fullWidth type='submit' variant='contained' sx={{mt:1, padding:"1rem"}}>Register</Button>
        </Form>

      </Formik>

      <Typography variant='body2' align='center' sx={{mt:3}}>
        Already have an Account ?
        <Button size='small' onClick={()=>navigate("/account/login")}>Login</Button>
      </Typography>
    </div>
  )
}
