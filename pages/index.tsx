import { NextPage } from "next";
import { Container, Heading, Flex, Stack, Button, Box } from "@chakra-ui/react";
import NextLink from "next/link";

const Home: NextPage = () => {
  return (
    <Box bg="black" minH="100vh" color="white">
      <Container maxW={"1200px"}>
        <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
          <Stack spacing={4} align={"center"}>
            <Heading>Marketplace</Heading>
            <Button
              as={NextLink}
              href='/buy'
              boxShadow="0px 8px 12px rgba(255, 0, 255, 0.3)"
              _hover={{
                boxShadow: "0px 10px 14px rgba(255, 0, 255, 0.4)"
              }}
              colorScheme="pink"
            >
              Shop NFTs
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;
