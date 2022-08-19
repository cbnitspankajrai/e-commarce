import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { ButtonContainer, Card ,CardArea, FullPage, HeadHeading, HeadParagraph, HeadSection} from "./Style";
import {useDispatch} from 'react-redux';
import { addToCart } from "../../Redux/Actions/CartActions";


function Wishlist() {
  return (
    <FullPage>
      <Box style={{ display: "flex" }}>
        <HeadSection>
          <HeadHeading> My Wishlist</HeadHeading>
          <HeadParagraph>
            View and can continue shopping in cart , and can remove product from wishlist.
          </HeadParagraph>
        </HeadSection>
      </Box>

      {/* order container start */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardArea>

        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

        </CardArea>
                
      
      </Box>
    </FullPage>
  );
}

const ProductCard=()=>{
  const dispatch=useDispatch();

  const CardData={
    title:" BabyBoy Cream Color",
  company:"Company",  
  img:"https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70",
  price:100
  }
  return(<>
   <div>
      <Box textAlign="center">
        <Card onClick={()=>console.log("hello")}>
          <img
            src={CardData.img}
            alt="0"
            style={{ height: 150 }}
          />
          <Typography style={{ fontWeight: 600, color: "#212121" }}>
            {CardData.title}
          </Typography>
          <Typography style={{ color: "green" }}>Extra 10% Off</Typography>
          <Typography style={{ color: "#212121", opacity: ".6" }}>
            Deal of the day
          </Typography>
          <ButtonContainer>
            <Button variant="contained" size="small" onClick={()=>{dispatch(addToCart(CardData))}}>Add To Cart</Button>
            <Button variant="contained" size="small">Remove</Button>
          </ButtonContainer>
        </Card>
      </Box>
    </div>
  </>)
}

export default Wishlist;
