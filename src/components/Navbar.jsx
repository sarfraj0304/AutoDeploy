import React from "react";
import { Container, Button, Flex, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW="2xl" py={3} color="white">
      <Flex justifyContent="space-between">
        <Link to="/">
          <Button colorScheme="blue">All</Button>
        </Link>
        <Link to="html">
          <Button colorScheme="green">HTML</Button>
        </Link>
        <Link to="/css">
          <Button colorScheme="red">CSS</Button>
        </Link>
        <Link to="/js">
          <Button colorScheme="teal">Javascript</Button>
        </Link>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Flex>
    </Container>
  );
};

export default Navbar;
