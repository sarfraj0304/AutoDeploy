import React, { useEffect, useState } from "react";
import { Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const RepoList = () => {
  let [name, setName] = useState("");
  let [data, setData] = useState([]);
  let { pathname } = useLocation();

  useEffect(() => {
    if (pathname == "/") {
      setName("all");
    }
    if (pathname == "/html") {
      setName("html");
    }
    if (pathname == "/css") {
      setName("css");
    }
    if (pathname == "/js") {
      setName("javasript");
    }
    getData();
  }, [pathname]);

  const getData = () => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=stars:%3E1+language:${name}`
      )
      .then(({ data }) => setData(data.items));
  };

  return (
    <Container maxW="2xl" py={3}>
      <Container textAlign="center" fontSize="xl" my={3}>
        Git Star
      </Container>
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
      >
        {data.map((repo) => (
          <GridItem p={3} key={repo.id} bg="#fff" color="black">
            <Image src={repo.owner.avatar_url} w="100%"></Image>
            <Text>{repo.name}</Text>
            <Text>{repo.forks_count}</Text>
            <Text>{repo.stargazers_count}</Text>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default RepoList;
