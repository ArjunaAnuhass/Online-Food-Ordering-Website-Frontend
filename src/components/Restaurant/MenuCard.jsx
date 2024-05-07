import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const demo=[
    {
        category:"Nuts & Seeds",
        ingredients:["Cashews"]
    },
    {
        category:"Protein",
        ingredients:["Ground beef", "Bacon & Strips"]
    },

]

function MenuCard() {

    const handleCheckBoxChange=(value)=>{
        console.log("value")
    }

  return (
    <div>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
                <img className='w-[7rem] h-[7rem] object-cover' src='https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'>Pizza</p>
                    <p>රු.2000</p>
                    <p className='text-gray-400'>Nice Food</p>
                </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
            <form>
                <div className='flex gap-5 flex-wrap'>
                    {
                        demo.map((item)=> 
                            <div>
                                <p>{item.category}</p>
                                <FormGroup>
                        {item.ingredients.map((item)=> <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={item} />)}
                        
                      </FormGroup>
                            </div>
                        )
                    }
                </div>
                <div className='pt-5'>
                    <Button type='submit' variant='contained' disabled={false}>{true?"Add to Cart":"Out of Stock"}</Button>
                </div>
            </form>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MenuCard