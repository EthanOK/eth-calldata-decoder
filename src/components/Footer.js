import React from "react";
import {
  useColorMode,
  Flex,
  HStack,
  VStack,
  Heading,
  Spacer,
  Link,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Social = ({ icon, link }) => {
  return (
    <Link href={link} isExternal>
      <FontAwesomeIcon icon={icon} size="lg" />
    </Link>
  );
};

function Footer() {
  const { colorMode } = useColorMode();
  const underlineColor = { light: "gray.500", dark: "gray.400" };

  return (
    <Flex py="4" borderTop="2px" borderTopColor={underlineColor[colorMode]}>
      <Spacer flex="1" />
      <VStack>
        <Heading size="md">
          Update by :{" "}
          <Link href={"https://github.com/EthanOK"} isExternal>
            <Text decoration="underline" display="inline">
              0xEthan
            </Text>{" "}
            <ExternalLinkIcon />
          </Link>
          Built by:{" "}
          <Link href="https://apoorvlathey.com/" isExternal>
            <Text decoration="underline" display="inline">
              Apoorv Lathey
            </Text>{" "}
            <ExternalLinkIcon />
          </Link>
        </Heading>
        <HStack spacing={8} mt={10}>
          <Social icon={faTwitter} link="https://x.com/0xEthanHK" />
          <Social icon={faGithub} link="https://github.com/EthanOK" />
          {/* <Social
            icon={faLinkedin}
            link="https://www.linkedin.com/in/apoorvlathey/"
          /> */}
        </HStack>
      </VStack>
      <Spacer flex="1" />
    </Flex>
  );
}

export default Footer;
