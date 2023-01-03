import { Image, Box } from "@chakra-ui/react";
export default function Icon({ imgSrc, alt }) {
  return (
    <Box borderWidth={1} borderColor="red">
      <Image src={imgSrc} alt={alt} />
    </Box>
  );
}
