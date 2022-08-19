import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import React, {useState} from "react";
import {BottomSection,CompanyOfProduct,Delivered,FullPage,HeaderOfOrder,HeadHeading,HeadParagraph,HeadSection,ListItems,OrderContainer,OrderDate,OrderId,OrderList,ProductDeatils,Status,TitleOfProduct,TrackOrderButton} from "./Style";
import {Button, Divider} from "@mui/material";
import Popup from "../../Components/Popup";
import TrackOrder from "../TrackOrders/TrackOrder";


function MyOrder() {
  const [openPopup,setOpenPopup]=useState(false)
  return (
    <FullPage>
      <Box style={{ display: "flex" }}>
        <HeadSection>
          <HeadHeading> My Orders</HeadHeading>
          <HeadParagraph>
            View and edit all your pending, delivered and returned order here.
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
        <OrderContainer>
          <HeaderOfOrder>
            <OrderId>
              Order &nbsp;<span>#125e455r453</span>
            </OrderId>
            <OrderDate>Order Placed Thu, 17Th Nov 2022</OrderDate>
            <TrackOrderButton onClick={()=>{setOpenPopup(true)}} startIcon={<ShareLocationIcon />}>
              Track Order
            </TrackOrderButton>
          </HeaderOfOrder>
          <Divider variant="middle" />

          {/* Orders List    */}
          <OrderList>
            <ListItems>
              <img src="https://rukminim1.flixcart.com/image/332/398/k5wse4w0/kids-ethnic-set/a/q/f/2-3-years-boys-festive-casual-full-sleev-pure-cotton-raja-jacket-original-imafzhfmwjk5tuek.jpeg?q=50" alt="Product"/>
             
             {/* First Product */}
              <ProductDeatils>
                <TitleOfProduct>
                  BabyBoy Cream Color <br /> Kurta long name
                </TitleOfProduct>
                <CompanyOfProduct>Company Name</CompanyOfProduct>
                <p> Size : XL &nbsp;| Qantity 1 &nbsp; | <span style={{fontWeight:"bold"}}>Rs. 1250</span></p>
              </ProductDeatils>

              <Status color="green">Status <br /><span>Deliverd</span></Status>
              <Delivered> Expected Delivery Date <br /> <span>24 June 2022</span> </Delivered>
            </ListItems>
          </OrderList>
            <Divider variant="middle" />

          {/* second product */}
          <OrderList>
            <ListItems>
              <img src="https://rukminim1.flixcart.com/image/332/398/k5wse4w0/kids-ethnic-set/a/q/f/2-3-years-boys-festive-casual-full-sleev-pure-cotton-raja-jacket-original-imafzhfmwjk5tuek.jpeg?q=50" alt="Product"/>
             
             {/* First Product */}
              <ProductDeatils>
                <TitleOfProduct>
                  BabyBoy Cream Color <br /> Kurta long name
                </TitleOfProduct>
                <CompanyOfProduct>Company Name</CompanyOfProduct>
                <p> Size : XL &nbsp;| Qantity 1 &nbsp; | <span style={{fontWeight:"bold"}}>Rs. 1250</span></p>
              </ProductDeatils>

              <Status color="green">Status <br /><span>Deliverd</span></Status>
              <Delivered> Expected Delivery Date <br /> <span>24 June 2022</span> </Delivered>
            </ListItems>
          </OrderList>
        <Divider variant="middle" />
        
        <BottomSection>
        <Button sx={{fontWeight:"bold"}} startIcon={<CloseIcon/>} size="small"> Cancel Order </Button>
        <p style={{color:"gray"}}>Paid Using With UPI Id Ending With 98</p>
        <p style={{fontWeight:"bold"}}>Rs. 3,010</p>
        </BottomSection>

        </OrderContainer>
        {/* Popup */}
        <Popup open={openPopup} setopen={setOpenPopup} marginTop="0"  fullWidth={true} maxWidth='md'>
          <TrackOrder/>
        </Popup>

       
      </Box>
    </FullPage>
  );
}

export default MyOrder;
