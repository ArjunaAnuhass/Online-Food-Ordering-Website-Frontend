import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard';

const categories=[
    "pizza",
    "biriyani",
    "burger",
    "submarine",
    "rise"
]

const foodType=[
    {label:"All", value:"all"},
    {label:"Vegetarian only", value:"vegetarian"},
    {label:"Non-Veg", value:"non-vegetarian"},
    {label:"Seasonal", value:"seasonal"}
];

const menu=[1,1,1,1,1,1,1]

function RestaurantDetails() {

    const [foodTypes, setFoodType]=useState("all")

    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name)
    }

  return (
    <div className="px-5 lg:px-20">
        <section>
            <h3 className="text-gray-500 py-2 mt-10">Home/Sri Lanka/indian fast food/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img className="w-full h-[40vh] object-cover" src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className="w-full h-[40vh] object-cover" src="https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className="w-full h-[40vh] object-cover" src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                    </Grid>
                </Grid>
            </div>
            <div className="pt-3 pb-5">
                <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
                <p className="text-gray-500 mt-1">Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Possimus reprehenderit assumenda nobis, 
                recusandae harum soluta quas maxime libero aspernatur reiciendis 
                ducimus, voluptatum excepturi aut, ipsa et esse repellat. Aperiam, possimus!</p>

                <div className="space-y-3 mt-3">
                <p className="text-gray-500 flex items-center gap-3">
                    <LocationOnIcon/>
                    <span>
                        Colombo, Sri Lanka
                    </span>
                </p>
                <p className="text-gray-500 flex items-center gap-3">
                    <CalendarTodayIcon/>
                    <span>
                        Mon-Sun: 9.00 AM - 10.00 PM (Today)
                    </span>
                </p>
                </div>
                
            </div>
        </section>

        <Divider/>

        <section className="pt-[2rem] lg:flex relative">
            <div className="space-y-10 lg:w-[20%] filter">
                <div className="box space-y-5 lg:sticky top-28 p-5 shadow-md">
                    <div>
                        <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
                            Food Type
                        </Typography>

                        <FormControl className="py-10 space-y-5" component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodTypes}>
                                {foodType.map((item)=> (<FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Divider/>
                    <div>
                        <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
                            Food Category
                        </Typography>

                        <FormControl className="py-10 space-y-5" component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodTypes}>
                                {categories.map((item)=> (<FormControlLabel key={item} value={item} control={<Radio />} label={item} />))}
                            </RadioGroup>
                        </FormControl>
                    </div>

                </div>
            </div>

            <div className="space-y-5 lg:w-[80%] lg:pl-10">
                {menu.map((item)=><MenuCard/>)}
            </div>
        </section>

    </div>
  )
}

export default RestaurantDetails