import { Flex, Heading, IconButton, Spacer, VStack, useColorMode } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin, FaMoon, FaSun } from "react-icons/fa"
import Header from "./Component/Header";
import Social from "./Component/Social";
import Profile from "./Component/Profile";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark'
  return (
    <>
      <VStack p={5}>
        <Flex w="100%">
          <Heading ml={8} size={'md'} fontWeight={'semibold'} color={"cyan.400"}>
            Anish singh rawat``</Heading>
          <Spacer></Spacer>
          <IconButton ml={2} icon={<FaLinkedin />} isRound={true} ></IconButton>
          <IconButton ml={2} icon={<FaInstagram />} isRound={true}  ></IconButton>
          <IconButton ml={2} icon={<FaGithub />} isRound={true} ></IconButton>
          <IconButton ml={2} icon={isDark ? <FaSun /> : <FaMoon />} isRound={true}
            onClick={toggleColorMode} >
          </IconButton>
        </Flex>
        <Header />
        <Social />
        <Profile />
      </VStack>
    </>
  );
}

export default App;
