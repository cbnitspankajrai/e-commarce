import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { dealData } from "../HomePage/data";
import { Body, BuyBtnContainer, Colors, DetailsContainer, Heading, ImageContainer, Offers, Price, Ratting, ServicesList} from "./Style";
import GradeIcon from "@mui/icons-material/Grade";
import BoltIcon from "@mui/icons-material/Bolt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Button } from "@mui/material";
import { addToCart } from "../../Redux/Actions/CartActions";

function Product() {
  const { id } = useParams();
  const dispatch=useDispatch();
  const ProductData = dealData.find((data) => data.id === id);
  const offers = [
    {
      type: "Special Price",
      description: "Get extra 20% off (price inclusive of cashback/coupon)",
    },
    {
      type: "Bank Offer",
      description: "5% Cashback on Flipkart Axis Bank Card",
    },
    {
      type: "Partner Offer",
      description:
        "Sign up for Flipkart Pay Later and get Flipkart Gift Card worth upto ₹500*",
    },
  ];
  const Services = [
    "1 Year Warranty",
    "10 Days Replacement",
    "Cash On Delivery",
  ];

  return (
    <>
      <Body>
        <ImageContainer>
          <img src={ProductData.url} alt="Product Image" />

          <BuyBtnContainer>
            <Button variant="contained" startIcon={<AddShoppingCartIcon />} size="large" onClick={() => dispatch(addToCart(ProductData))}>
              add to cart
            </Button>
            <Button variant="contained" startIcon={<BoltIcon />} size="large" onClick={() => console.log("add to wishlist")}>
              Buy Now
            </Button>
          </BuyBtnContainer>
        </ImageContainer>
        <DetailsContainer>
          <h3 style={{ fontSize: 21, marginBottom: "10px" }}>
            {ProductData.title.shortTitle}
          </h3>
          <Ratting>
            <GradeIcon sx={{ width: "16px" }} />
            <span style={{ fontWeight: "bold", marginTop: "3px" }}>4.0</span>
          </Ratting>
          <Price>₹ {ProductData.price?.mrp}</Price>

          <Heading>Available offers</Heading>
          {offers.map((data) => {
            return (
              <>
                <Offers>
                  <LocalOfferIcon sx={{ color: "green" }} /> &nbsp;{" "}
                  <p style={{ fontWeight: "bold" }}>{data.type}&nbsp; </p>
                  <p>{data.description}</p>
                </Offers>
              </>
            );
          })}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Heading>Available Color</Heading>
              <Box
                sx={{
                  display: "flex",
                  width: "150px",
                  justifyContent: "space-evenly",
                }}
              >
                <Colors color="black" />
                <Colors color="red" />
                <Colors color="yellow" />
                <Colors color="pink" />
              </Box>

              <Heading>Available Size</Heading>
              <Box>
                <Button variant="outlined">S</Button>
                <Button variant="outlined">M</Button>
                <Button variant="outlined">L</Button>
                <Button variant="outlined">XL</Button>
                <Button variant="outlined">XXL</Button>
              </Box>
            </Box>
            <Box>
              <ul style={{ color: "green" }}>
                <Heading sx={{ color: "gray" }}>Services</Heading>
                {Services.map((data) => (
                  <li>
                    <ServicesList>{data}</ServicesList>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        </DetailsContainer>
      </Body>
    </>
  );
}

export default Product;
