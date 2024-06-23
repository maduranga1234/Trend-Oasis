import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Box, Button, Grid, TextField } from "@mui/material";

const DeliveryAddressForm = () => {

  const handleSubmit=(e)=>{
    e.preventDefault()
  
    const data = new FormData(e.currentTarget)

    const address={
      firstName:data.get("firstName"),
      lastName:data.get("lastName"),
      streetAddress:data.get("address"),
      city:data.get("city"),
      state:data.get("state"),
      zipCode:data.get("zip"),
      mobile:data.get("phoneNumber")
    }

    console.log("address",address)
  }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          lg={5}
          xs={12}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll">
            <div className="p-5 border-b cursor-pointer py-7">
              <AddressCard />
              <Button
                sx={{ mt: 2, bgcolor: "rgb(145, 85, 253)" }}
                size="large"
                variant="contained"
              >
                Deliver Here
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="p-5 border shadow-md rounded-s-md">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="state"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="zip / Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <Button
                sx={{py:1.5, mt: 2, bgcolor: "rgb(145, 85, 253)" }}
                size="large"
                variant="contained"
                type="submit"
              >
                Deliver Here
                </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
