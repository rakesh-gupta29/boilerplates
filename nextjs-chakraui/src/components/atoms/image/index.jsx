import { Box, Image } from "@chakra-ui/react";
export default function Img({ src, alt, loading }) {
  return (
    <Box>
      <Image src={src} alt={alt} />
    </Box>
  );
}
