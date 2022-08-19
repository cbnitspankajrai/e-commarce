import { Box, Button, styled } from "@mui/material";


export const SearchBarContainer=styled(Box)({
     maxWidth:"100%",
     backgroundColor:'white',
     height:'40px',
     width:'600px',
     border:'1px solid black',
     borderRadius:'7px',
    position:'absolute',
    left:'15%'
     
     
})
export const CustomSearch=styled("input")({
     height:'83%',
     width:"90%",
     marginLeft:'10px',
     border:'none',
     outline:'none',
     borderRadius:'6px',
     fontSize:16,
     
})

export const CustomButton=styled(Button)({
     fontSize: 14,
     color:"white",
     height:"40px",
     margin: 'auto 20px',
     padding: '10px 30px',
     border: '1px solid',
     lineHeight: 1.5,
     backgroundColor: '#0063cc',
     borderColor: '#0063cc',
     fontFamily: [
       '-apple-system',
       'BlinkMacSystemFont',
       '"Segoe UI"',
       'Roboto',
       '"Helvetica Neue"',
       'Arial',
       'sans-serif',
       '"Apple Color Emoji"',
       '"Segoe UI Emoji"',
       '"Segoe UI Symbol"',
     ].join(','),
     '&:hover': {
       backgroundColor: '#0069d9',
       borderColor: '#0062cc',
       boxShadow: 'none',
     },
     '&:active': {
       boxShadow: 'none',
       backgroundColor: '#0062cc',
       borderColor: '#005cbf',
     },
     '&:focus': {
       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
     }
})


