import { Button } from "@mui/material";
import { Box, styled } from "@mui/system";

export const FullPage = styled(Box)({
  width: "99.5%",
  minHeight: "90vh",
});
export const HeadParagraph = styled("p")({
  width: "300px",
  fontStyle: "italic",
  color: "darkgray",
  fontSize: 14,
  letterSpacing: "1px",
});
export const HeadHeading = styled("h1")({
  margin: "50px",
  display: "inline-block",
  letterSpacing: "1px",
});
export const HeadSection = styled(Box)({
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
});
export const OrderContainer = styled(Box)({
  width: "94%",
  minHeight: "200px",
  border: "0.2px solid lightgray",
  borderRadius: "5px",
  background: "white",
  boxSizing: "border-box",
  boxShadow: "0px 10px 15px -3px rgb(0 0 0 / 10%)",
  margin:"20px auto"
});

export const OrderId = styled("p")({
  fontSize: 16,
  fontWeight: "bold",
  background: "#edebeb",
  borderRadius: "20px",
  display: "inline",
  padding: "6px 20px",
  span: {
    color: "#3d84ff",
  },
});
export const HeaderOfOrder = styled(Box)({
  display: "flex",
  padding: "20px",
  alignItems: "center",
  position: "relative",
});
export const OrderDate = styled("p")({
  marginLeft: "20px",
  fontStyle: "italic",
  color: "gray",
});
export const TrackOrderButton = styled(Button)({
  background: "#ff9800",
  borderRadius: "10px",
  color: "white",
  position: "absolute",
  right: 50,
  padding: "6px 20px",
  "&:hover": {
    background: "#a36100",
  },
});

//order listing css
export const OrderList = styled(Box)({
  height: "200px",
  padding: "20px",
});

export const ListItems = styled(Box)({
  display: "flex",
  height: "200px",
  padding: "10px",
  boxSizing: "border-box",
  justifyContent: "space-around",
  img: {
    height: "180px",
    width: "125px",
  },
});

export const ProductDeatils = styled(Box)({
  height: "180px",
  width: "30%",
  padding: "10px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
});

export const TitleOfProduct = styled("p")({
  fontWeight: "bold",
  marginBottom: 0,
});
export const CompanyOfProduct = styled("p")({
  color: "gray",
  fontStyle: "italic",
  marginTop: "5px",
});
export const CompanyAndSize = styled("p")({
  color: "gray",
  span: {
    color: "black",
    fontWeight: "bold",
  },
});

export const Status = styled(Box)(({ color }) => ({
  height: "180px",
  width: "30%",
  padding: "10px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  color: "gray",
  justifyContent: "center",
  alignItems: "center",
  span: {
    fontWeight: "bold",
    color,
  },
}));
export const Delivered = styled(Box)({
  height: "180px",
  width: "30%",
  padding: "10px",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  color: "gray",
  span: {
    fontWeight: "bold",
    color: "black",
  },
});

export const BottomSection=styled(Box)({
height:"50px",
display:"flex",
justifyContent:"space-between",
padding:"0 5%"

})