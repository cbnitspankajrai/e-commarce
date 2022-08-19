import * as React from 'react';
import Box from "@mui/material/Box";
import Countdown from 'react-countdown';
import Divider from '@mui/material/Divider';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function ListItem ({ data, timer, title }){
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  
  //responsive design
  const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

  const renderer = ({ hours, minutes, seconds }) => {
      return <span>{hours} : {minutes} : {seconds}  Left</span>;
  };
  
  return (
      <Box >
          <Box >
              <Typography style={{fontSize: 22,fontWeight: 600,lineHeight: '32px',marginRight: 25}}>{title}</Typography>
              {
                  timer && <Box style={{color: '#7f7f7f', marginLeft: 10, display: 'flex', alignItems: 'center'}}>
                              <img src={timerURL} style={{ width: 24 }} alt='time clock' />
                              <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                      </Box>
              }
              <Button variant="contained" color="primary" size="small" style={{marginTop:'-45px',float:"right"}}>View All</Button>
          </Box>
          <Divider />
          <Carousel swipeable={false} draggable={false} responsive={responsive} centerMode={true} infinite={false} autoPlay={true} autoPlaySpeed={10000} keyBoardControl={true} showDots={false} containerClass="carousel-container" dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px">
              {
                  data.map(temp => (
                      <Link to={`product/${temp.id}`} style={{textDecoration: 'none'}}>
                          <Box textAlign="center" >
                              <img src={temp.url}  alt="" style={{height:200}}/>
                              <Typography style={{ fontWeight: 600, color: '#212121' }}>{temp.title.shortTitle}</Typography>
                              <Typography style={{ color: 'green' }}>{temp.discount}</Typography>
                              <Typography style={{ color: '#212121', opacity: '.6' }}>{temp.tagline}</Typography>
                          </Box>
                      </Link>
                  ))
              }
          </Carousel>
      </Box>
  )
}
