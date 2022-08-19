import React from "react";
import ListItem from "./ListItem";
import Banner from "./Banner";
import Box from "@mui/material/Box";
import {dealData} from './data'
import Category from "../../Components/Category/Category";
import { Products } from "../../data/Products";

function HomePage() {
  console.log(Products)
  return (
    <>
    <Category/>
    <Banner/>
      <Box xs={{display:"flex"}}>
            <Box xs={{width: '83%'}}>
                <ListItem data={dealData} title='Deals of the Day' timer={true} multi={true} />
            </Box>
        </Box>
      <Box xs={{display:"flex"}} style={{marginTop:"60px"}}>
            <Box xs={{width: '83%'}}>
                <ListItem data={dealData} title='Categories' timer={false} multi={false} />
            </Box>
        </Box>
    </>
  );
}

export default HomePage;
