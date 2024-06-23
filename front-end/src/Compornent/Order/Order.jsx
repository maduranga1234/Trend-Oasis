import { Grid } from "@mui/material";
import React from "react";
import OrderCart from "./OrderCart";

const orderStatus=[
    {lable:"On The Way", value:"on_the_way"},
    {lable:"Delivered", value:"delevered"},
    {lable:"Cancelled", value:"cancelled"},
    {lable:"Returned", value:"Returned"}

]

export default function Order() {
  return (
    <div className="px:5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto p-5 bg-white shadow-lg stacky top-5">
              <h1 className="text-lg font-bold">Filter</h1>
              <div className="mt-10 space-y-4">

                <h1 className="font-semibold">ORDER STATUS</h1>
                {orderStatus.map((option)=>
                <div className="flex items-center">
                <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />

                  <label className="ml-3 text-sm text-gray-600" htmlFor={option.value}>
                    {option.lable}
                  </label>
                </div>
                )}
                

              </div>
          </div>
        </Grid>

        <Grid item xs={9}>

            <div className="space-y-5">
            {[1,1,1,1,1].map((item)=> <OrderCart/>)}

            </div>

        


        </Grid>
      </Grid>
    </div>
  );
}
