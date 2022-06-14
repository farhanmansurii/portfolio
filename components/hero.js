import {
  Flex,
  useColorModeValue,
  Text,
  Container,
  Button,
} from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
export default function Hero() {
  return (
    <>
      <Flex justify="center" mx="5%" mt="4.2rem">
        <Text
          mb="3rem"
          px="2rem"
          pt="0.5rem"
          pb="0.5rem"
          align="center"
          borderRadius="2xl"
          bg={useColorModeValue("#ffb07b", "#cf4c2e")}
          color={useColorModeValue("#fffef8", "#141414")}
          fontSize={["xs", "sm", "sm", "md"]}
        >
          hi I&apos;m a web developer based in Mumbai , India
        </Text>
      </Flex>
      <Container
        minH="70vh"
        w="90%"
        centerContent
        display="flex"
        flexDirection={{ base: "column-reverse", md: "row" }}
        justifyContent="space-around"
      >
        <Flex direction="column " w="100%" p="1rem">
          <Text
            fontWeight="light"
            fontSize={["3xl", "5xl", "5xl", "6xl"]}
            textTransform="capitalize"
            lineHeight={0.9}
          >
            Farhan Mansuri
          </Text>

          <Flex direction="column" w="100%">
            <Text
              py={3}
              fontSize="10px"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="1px"
              color={useColorModeValue("#94B49F", "ffb07b")}
            >
              Digital Craftsman(sometimes artist / web developer/ <br />
              software tester)
            </Text>

            <Text fontSize="md" textTransform="lowercase" lineHeight={1}>
              hola welcome to my, corner of the internet, where you can find my
              works, thoughts, favourite anime and other random things.
            </Text>
          </Flex>
        </Flex>
        <Container h="250px" w="244px" justify="center">
          <Spline scene="https://prod.spline.design/pJUce1tFIbYkKtGO/scene.splinecode" />
        </Container>
      </Container>
    </>
  );
}