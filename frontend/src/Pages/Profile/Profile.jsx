import { Box, Divider, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import { MainContainer, Heading, ProfilePhotoWithName, Container, SubHeading, Information} from "./style";
import PersonalInfo from "./PersonalInfo";
import Popup from "../../Components/Popup";
import AddressInfo from "./AddressInfo";

function Profile() {
  const [personalInfoShow, setPersonalInfoShow] = useState(false);
  const [addrInfoShow, setAddrInfoShow] = useState(false);

  return (
    <>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
        <MainContainer
          gridColumn="span 3"
          gridRow="span 3"
          h="80vh"
          marginY="4vh"
        >
          <Heading margin="15px auto" fontSize="24px">
            Profile
          </Heading>
          <ProfilePhotoWithName>
            <img
              src="https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png"
              alt="profilepic"
            />
            <p>User Name</p>
          </ProfilePhotoWithName>
          <Divider variant="middle" />
          <Container>
            <SubHeading>Customer Id</SubHeading>
            <Information>w265dd154e11541</Information>

            <SubHeading>Mobile</SubHeading>
            <Information>9876543210</Information>

            <SubHeading>Email</SubHeading>
            <Information>name@example.com</Information>
          </Container>
        </MainContainer>

        {/* Second Container and personal Information section start */}
        <MainContainer gridColumn="span 8" h="31vh" marginTop="4vh">
          <Heading  margin="10px 15px">Personal Information</Heading>

          <Box display="flex" marginX="50px">
            <Box width="50%">
              <SubHeading>Name </SubHeading>
              <Information>User Name</Information>
            </Box>
            <Box width="50%">
              <SubHeading>User Id </SubHeading>
              <Information>w265dd154e11541</Information>
            </Box>
          </Box>

          <Box display="flex" marginX="50px">
            <Box width="50%">
              <SubHeading>Gender </SubHeading>
              <Information>Male/Female</Information>
            </Box>
            <Box width="50%">
              <SubHeading>Email</SubHeading>
              <Information>name@examplemail.com</Information>
            </Box>
          </Box>
          <Button
            style={{ position: "absolute" }}
            variant="contained"
            endIcon={<EditIcon />}
            size="small"
            onClick={() => setPersonalInfoShow(true)}
          >
            Edit
          </Button>
        </MainContainer>

        {/* Address information section start */}
        <MainContainer gridColumn="span 8" h="48vh">
          <Heading margin="10px 15px">Address Information</Heading>

          <Box display="flex" marginX="50px">
            <Box width="50%">
              <SubHeading>Line 1</SubHeading>
              <Information>Ward No 09</Information>
            </Box>
            <Box width="50%">
              <SubHeading>Line 2</SubHeading>
              <Information>Parasia</Information>
            </Box>
          </Box>

          <Box display="flex" marginX="50px">
            <Box width="50%">
              <SubHeading>House Number</SubHeading>
              <Information>254/6</Information>
            </Box>
            <Box width="50%">
              <SubHeading>Land Mark</SubHeading>
              <Information>Near Lions Club</Information>
            </Box>
          </Box>

          <Box display="flex" marginX="50px">
            <Box width="50%">
              <SubHeading>Area Pin Code</SubHeading>
              <Information>480441</Information>
            </Box>
            <Box width="50%">
              <SubHeading>State</SubHeading>
              <Information>Madhya Pradesh</Information>
            </Box>
          </Box>
          
          <Box display="flex" marginX="50px">
            <Box width="50%">
              <SubHeading>District</SubHeading>
              <Information>Chhindwara</Information>
            </Box>
            <Box width="50%">
              <SubHeading>Subdistrict</SubHeading>
              <Information>Parasia</Information>
            </Box>
          </Box>

          <Button
            style={{ position: "absolute" }}
            variant="contained"
            endIcon={<EditIcon />}
            onClick={() => setAddrInfoShow(true)}
            size="small"
          >
            Edit
          </Button>
        </MainContainer>

      </Box>

      
        {/* popups */}
        <Popup open={personalInfoShow} setopen={setPersonalInfoShow}>
          <PersonalInfo />
        </Popup>

        <Popup open={addrInfoShow} setopen={setAddrInfoShow}>
          <AddressInfo />
        </Popup>
    </>
  );
}

export default Profile;
