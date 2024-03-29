import React from "react";
import {
  Container,
  Text,
  Flex,
  IconButton,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  useColorMode,
  Button,
} from "@chakra-ui/react/";
import { projects } from "./data/images/projectdata";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Featured = () => {
  return (
    <Flex direction="column" align="center" gap="0" minH="100vh" my="7rem">
      <Text
        fontSize={["3xl", "4xl", "5xl", "5xl"]}
        textTransform="uppercase"
        fontWeight="medium"
        mb="1.5rem"
        fontFamily="Ogg"
      >
        Featured Works
      </Text>
      <Flex direction="row" flexWrap="wrap" align="center" gap="2em">
        {projects
          .slice(0, 2)
          .map(({ id, title, description, imageSrc, tools, url, live }) => (
            <Container key={id} w="300px">
              <Tilt>
                <Image
                  src={imageSrc}
                  alt={title}
                  style={{ borderRadius: "xl", overflow: "hidden" }}
                />
              </Tilt>
              <Text fontSize="2xl" m={2} fontFamily="Ogg">
                {title}
              </Text>
              <Text fontSize="xs" m={1} align="left">
                {description}
              </Text>
              <Flex justify="space-between" direction="column">
                <Flex>
                  <List display="flex" flexDirection="row">
                    {tools.map((tool,index) => (
                      <ListItem key={index} p="0.5rem">
                        <Icon
                          aria-label={tool.name}
                          transitionDuration="400ms"
                          boxSize="1.5rem"
                          as={tool.icon}
                          _hover={{ fill: tool.color }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Flex>

                <Flex gap="3">
                  <Link href={url}>
                    <Text border="2px solid " px="1.4rem" py="0.4rem">
                      Source
                    </Text>
                  </Link>
                  <Link href={live}>
                    <Text
                      px="1.4rem"
                      pt="0.5rem"
                      color="#FBFFF1"
                      bg="#396A64"
                      _dark={{ bg: "#E0D0C1", color: "#262626" }}
                    >
                      Live
                    </Text>
                  </Link>
                </Flex>
              </Flex>
            </Container>
          ))}
      </Flex>
      <Link href="/work">
        <Text
          mt="2rem"
          border="2px solid "
          px="4.4rem"
          py="0.4rem"
          color={useColorModeValue("#FBFFF1", "#262626")}
          bg={useColorModeValue("#1EA896", "#e63946")}
        >
          See more of my works
        </Text>
      </Link>
    </Flex>
  );
};

export default Featured;
