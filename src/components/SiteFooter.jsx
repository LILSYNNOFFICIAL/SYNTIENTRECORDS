import { Box, Flex, Link, Text } from "@chakra-ui/react";

export default function SiteFooter() {
  return (
    <Box as="footer" className="site-footer">
      <Flex className="footer-inner" direction={{ base: "column", md: "row" }} align={{ base: "flex-start", md: "center" }} justify="space-between" gap={3}>
        <Text className="copyright">2026 <Link href="https://synovamedia.com" target="_blank" rel="noreferrer">SYNOVA MEDIA</Link></Text>
        <Text className="contact-line">CONTACT: <a href="mailto:contact@lilsynn.com">contact@lilsynn.com</a></Text>
      </Flex>
    </Box>
  );
}