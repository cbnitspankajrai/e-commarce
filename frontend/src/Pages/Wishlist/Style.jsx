import { Box, styled } from "@mui/material";

export const Card=styled(Box)({
    border: "0.2px solid #dfd9d9" ,
     width:"220px",
     borderRadius:"5px",
     margin:"10px 5px",
     cursor:"pointer",
     boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
})
export const ButtonContainer=styled(Box)({
    display:"flex",
    justifyContent:"space-evenly",
    margin:"20px auto"

})
export const FullPage = styled(Box)({
    width: "99.5%",
    minHeight: "90vh",
  });

  export const HeadHeading = styled("h1")({
    margin: "50px",
    display: "inline-block",
    letterSpacing: "1px",
  });
  export const HeadParagraph = styled("p")({
    width: "300px",
    fontStyle: "italic",
    color: "darkgray",
    fontSize: 14,
    letterSpacing: "1px",
  });
  export const HeadSection = styled(Box)({
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  });

  export const CardArea = styled(Box)({
    width: "94%",
    minHeight: "200px",
    padding: '7px',
    border: '0.2px solid darkgray',
    borderRadius: "5px",
    background: "white",
    boxSizing: "border-box",
    boxShadow: "0px 10px 15px -3px rgb(0 0 0 / 10%)",
    margin:"20px auto",
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center"
  });