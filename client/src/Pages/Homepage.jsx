import { Box, Container, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

function Homepage(props) {

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user){
      <Navigate to="/chats" replace/>
    };
  }, []);

  return (
    <Container maxW="xl">
      <Box
        d="flex"
        justifyContent="center"
        textAlign={"center"}
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="work sans" color={"black"}>
          Talk-a-Tive
        </Text>
      </Box>
      <Box color={"black"} bg="white" w="100%" p={4} borderRadius={"lg"} borderWidth={"1px"}>
        <Tabs variant="soft-rounded">
          <TabList mb={"1em"}>
            <Tab w="50%">Login</Tab>
            <Tab w="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
